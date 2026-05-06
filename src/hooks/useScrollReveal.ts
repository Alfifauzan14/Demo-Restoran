import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return { ref, isInView };
}
