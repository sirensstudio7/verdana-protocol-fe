import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  start?: string;
  onScroll?: boolean;
};

const ScrollReveal = ({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  duration = 1,
  y = 40,
  stagger = 0,
  start = "top 88%",
  onScroll = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets =
      stagger > 0 ? gsap.utils.toArray<HTMLElement>(root.children) : [root];

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });

      const tween = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        paused: onScroll,
      });

      if (onScroll) {
        ScrollTrigger.create({
          trigger: root,
          start,
          once: true,
          animation: tween,
        });
      } else {
        tween.play();
      }
    }, root);

    const fallback = window.setTimeout(() => {
      gsap.set(targets, { opacity: 1, y: 0 });
    }, 4000);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
    };
  }, [delay, duration, y, stagger, start, onScroll]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;
