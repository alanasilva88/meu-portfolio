"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ProjectsCarousel.module.css";

export default function ProjectsCarousel({ children }: { children: ReactNode }) {
  const viewport = useRef<HTMLDivElement>(null);
  const animation = useRef<ReturnType<typeof animate> | null>(null);
  const dragStart = useRef(0);
  const dragging = useRef(false);
  const reducedMotion = useReducedMotion();
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const update = () => {
      setEdges({
        start: element.scrollLeft <= 2,
        end: element.scrollLeft >= element.scrollWidth - element.clientWidth - 2,
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    for (const child of element.children) observer.observe(child);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
      animation.current?.stop();
    };
  }, []);

  const move = (direction: number) => {
    const element = viewport.current;
    if (!element) return;
    animation.current?.stop();
    const first = element.firstElementChild as HTMLElement | null;
    const step = (first?.offsetWidth ?? element.clientWidth) + 24;
    const target = Math.max(0, Math.min(
      element.scrollWidth - element.clientWidth,
      (Math.round(element.scrollLeft / step) + direction) * step,
    ));
    animation.current = animate(element.scrollLeft, target, {
      duration: reducedMotion ? 0 : 0.3,
      ease: "easeOut",
      onUpdate: (value) => { element.scrollLeft = value; },
    });
  };

  return (
    <div role="region" aria-roledescription="carrossel" aria-labelledby="outros-projetos-title">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p id="carousel-help" className="text-sm text-gray-400">
          Arraste ou use as setas para explorar os projetos.
        </p>
        <div className="flex gap-2">
          <button type="button" aria-label="Projetos anteriores" aria-controls="other-projects-carousel" disabled={edges.start} onClick={() => move(-1)} className={styles.button}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" aria-label="Próximos projetos" aria-controls="other-projects-carousel" disabled={edges.end} onClick={() => move(1)} className={styles.button}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <motion.div
        ref={viewport}
        id="other-projects-carousel"
        className={styles.viewport}
        tabIndex={0}
        aria-label="Outros projetos e experimentos"
        aria-describedby="carousel-help"
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
        onPointerDown={(event) => {
          animation.current?.stop();
          dragging.current = false;
          if (event.pointerType === "mouse") dragStart.current = event.currentTarget.scrollLeft;
        }}
        onPan={ (event, info) => {
          if (event.pointerType !== "mouse" || !viewport.current) return;
          dragging.current = true;
          viewport.current.scrollLeft = dragStart.current - info.offset.x;
        }}
        onClickCapture={(event) => {
          if (dragging.current) {
            event.preventDefault();
            event.stopPropagation();
            dragging.current = false;
          }
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {children}
      </motion.div>
    </div>
  );
}
