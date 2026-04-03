"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ScrollVisualProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** "fade" = apparaît et reste | "ephemeral" = apparaît puis se dissipe */
  mode?: "fade" | "ephemeral";
};

/** Wrapper qui fait apparaître/disparaître un visuel au passage dans le viewport */
export function ScrollVisual({
  children,
  className = "",
  delay = 0,
  mode = "fade",
}: ScrollVisualProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: mode === "fade",
    margin: "-12% 0px -12% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
