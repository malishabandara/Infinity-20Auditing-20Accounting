import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const slides: { src: string; alt: string }[] = [
  {
    src: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Colleagues celebrating success over financial charts in a modern office.",
  },
  {
    src: "https://images.pexels.com/photos/6779567/pexels-photo-6779567.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Professionals analyzing financial documents and reports with a calculator.",
  },
  {
    src: "https://images.pexels.com/photos/10619954/pexels-photo-10619954.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Downtown Dubai skyline with modern skyscrapers and business district.",
  },
  {
    src: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Business professionals discussing data charts and graphs in a modern office setting.",
  },
];

export function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Images cross-fade */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
              i === index ? "opacity-100" : "opacity-0",
            )}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Overlays for readability, matching other pages */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.45)_0%,rgba(13,62,120,0.75)_100%)]" />
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}

export default BackgroundSlideshow;
