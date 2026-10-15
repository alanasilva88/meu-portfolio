"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const PHRASES = [
  "Next.js & React",
  "Java & Spring Boot",
  "Node.js & TypeScript",
  "APIs & Microsserviços",
  "SaaS & Inteligência Artificial",
];
const LONGEST_PHRASE = PHRASES.reduce((longest, phrase) =>
  phrase.length > longest.length ? phrase : longest,
);

const TYPE_SECONDS = 0.085;
const DELETE_SECONDS = 0.045;
const HOLD_SECONDS = 1.8;
const GAP_SECONDS = 0.35;
export default function HeroTypewriter() {
  const elapsed = useMotionValue(0);
  const phraseIndex = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const text = useTransform(() => {
    const time = elapsed.get();
    const phrase = PHRASES[phraseIndex.get()];
    if (reduceMotion) return PHRASES[0];
    const typing = phrase.length * TYPE_SECONDS;
    if (time < typing) {
      return phrase.slice(0, Math.floor(time / TYPE_SECONDS));
    }
    if (time < typing + HOLD_SECONDS) return phrase;
    const deleted = Math.floor((time - typing - HOLD_SECONDS) / DELETE_SECONDS);
    return phrase.slice(0, Math.max(0, phrase.length - deleted));
  });

  useEffect(() => {
    if (reduceMotion) return;

    let disposed = false;
    let animation: ReturnType<typeof animate> | undefined;

    // Complete each phrase before advancing, independently of the list's length.
    const playPhrase = (index: number) => {
      if (disposed) return;
      elapsed.jump(0);
      phraseIndex.set(index);
      const duration = PHRASES[index].length * (TYPE_SECONDS + DELETE_SECONDS)
        + HOLD_SECONDS + GAP_SECONDS;
      animation = animate(elapsed, [0, duration], {
        type: "tween",
        duration,
        ease: "linear",
        onComplete: () => playPhrase((index + 1) % PHRASES.length),
      });
    };

    playPhrase(0);
    return () => {
      disposed = true;
      animation?.stop();
    };
  }, [elapsed, phraseIndex, reduceMotion]);

  return (
    <span className="inline-block max-w-full align-bottom font-mono text-sm font-semibold leading-relaxed text-yellow-400 sm:text-base lg:text-lg">
      <span className="sr-only">{PHRASES.join(", ")}</span>
      <span aria-hidden="true" className="grid">
        {/* Reserve the longest phrase's height, including wrapping on small screens. */}
        <span className="invisible col-start-1 row-start-1">
          {LONGEST_PHRASE}_
        </span>
        <span className="col-start-1 row-start-1">
          <motion.span>{text}</motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: reduceMotion ? 1 : [1, 0, 1] }}
            transition={{
              duration: 0.9,
              times: [0, 0.5, 1],
              ease: (progress) => Math.floor(progress),
              repeat: Infinity,
            }}
          >
            _
          </motion.span>
        </span>
      </span>
    </span>
  );
}
