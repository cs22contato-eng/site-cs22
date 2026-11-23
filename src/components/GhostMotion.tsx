import { PointerEvent, ReactNode, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

const FLUID_EASE = [0.16, 1, 0.3, 1] as const;

export function GhostScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] origin-left bg-gradient-to-r from-[#C47A38] via-[#E58B45] to-[#AAB4C0] shadow-[0_0_12px_rgba(229,139,69,0.65)] pointer-events-none"
    />
  );
}

interface GhostRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}

export function GhostReveal({
  children,
  delay = 0,
  className = '',
  immediate = false,
}: GhostRevealProps) {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.988 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.48, delay, ease: FLUID_EASE }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: 16, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.42, delay: Math.min(delay, 0.16), ease: FLUID_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GhostSpotlightProps {
  children: ReactNode;
  className?: string;
}

export function GhostSpotlight({ children, className = '' }: GhostSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x.toFixed(1)}%`);
    el.style.setProperty('--my', `${y.toFixed(1)}%`);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={`ghost-spotlight-surface ${className}`}
    >
      {children}
    </div>
  );
}
