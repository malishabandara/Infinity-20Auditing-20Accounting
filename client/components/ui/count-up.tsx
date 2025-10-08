import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      options ?? { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView } as const;
}

export interface CountUpProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number | string;
  duration?: number; // seconds
}

export function CountUp({
  value,
  duration = 1.6,
  className,
  ...rest
}: CountUpProps) {
  const { prefix, number, suffix, decimals } = useMemo(() => {
    const str = String(value).trim();
    const match = str.match(/^([^\d.-]*)(-?\d+(?:[\.,]\d+)?)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: str, decimals: 0 };
    const raw = match[2].replace(",", ".");
    const num = parseFloat(raw);
    const dec = raw.includes(".") ? raw.split(".")[1].length : 0;
    return {
      prefix: match[1] ?? "",
      number: isNaN(num) ? 0 : num,
      suffix: match[3] ?? "",
      decimals: dec,
    };
  }, [value]);

  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.25 });
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const total = Math.max(0.3, duration) * 1000;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      const eased = easeOutCubic(t);
      setDisplay(number * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, duration, number]);

  const formatted = useMemo(() => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(display * factor) / factor;
    return `${prefix}${rounded.toFixed(decimals)}${suffix}`;
  }, [display, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={cn(className)} {...rest}>
      {formatted}
    </span>
  );
}

export default CountUp;
