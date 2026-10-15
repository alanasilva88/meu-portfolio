"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import styles from "./SpotlightCard.module.css";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const cancelFrame = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  useEffect(() => cancelFrame, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;

    pointerRef.current = { x: event.clientX, y: event.clientY };
    if (frameRef.current !== null) return;

    // Agrupa eventos do mouse em uma atualização por frame, sem renderizar o React.
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const card = cardRef.current;
      if (!card) return;

      const bounds = card.getBoundingClientRect();
      card.style.setProperty(
        "--mouse-x",
        `${pointerRef.current.x - bounds.left}px`,
      );
      card.style.setProperty(
        "--mouse-y",
        `${pointerRef.current.y - bounds.top}px`,
      );
      card.dataset.spotlight = "active";
    });
  };

  const resetSpotlight = () => {
    cancelFrame();
    if (cardRef.current) delete cardRef.current.dataset.spotlight;
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetSpotlight}
      onPointerCancel={resetSpotlight}
    >
      <div className={styles.content}>{children}</div>
    </article>
  );
}
