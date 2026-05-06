import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface AnimateRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  fadeOnly?: boolean;
}

export function AnimateReveal({
  children,
  delay = 0,
  className = "",
  y = 40,
  fadeOnly = false,
}: AnimateRevealProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: fadeOnly ? 0 : y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: fadeOnly ? 0 : y }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimateReveal;
