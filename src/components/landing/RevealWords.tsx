import { useLayoutEffect, useRef, type ElementType } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

type RevealWordsProps = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** Animate on scroll (default) or immediately on mount (hero). */
  onScroll?: boolean;
};

const RevealWords = ({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  onScroll = true,
}: RevealWordsProps) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const words = root.querySelectorAll("[data-word]");
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 110, opacity: 0 });

      const tween = gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.055,
        delay,
        ease: "power3.out",
      });

      if (onScroll) {
        ScrollTrigger.create({
          trigger: root,
          start: "top 88%",
          once: true,
          animation: tween,
        });
      }
    }, root);

    return () => ctx.revert();
  }, [text, delay, onScroll]);

  const words = text.split(" ").filter(Boolean);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-top pb-[0.12em]">
          <span data-word className="inline-block will-change-transform">
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealWords;
