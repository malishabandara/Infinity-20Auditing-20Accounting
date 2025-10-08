import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides: { src: string; alt: string }[] = [
  {
    src: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Business professionals discussing data charts and graphs in a modern office setting.",
  },
  {
    src: "https://images.pexels.com/photos/8297034/pexels-photo-8297034.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Professional focusing on accounting documents and calculator at a desk.",
  },
  {
    src: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Colleagues celebrating a successful negotiation with a handshake in a boardroom.",
  },
  {
    src: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Flatlay of business analytics report, keyboard, pen, and smartphone on a wooden desk.",
  },
];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (!api) return;
    timerRef.current = window.setInterval(() => api.scrollNext(), 5000);
  };
  const stop = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!api) return;
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  return (
    <div
      className="relative z-0 overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_35px_70px_-35px_rgba(0,0,0,0.4)]"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <Carousel setApi={setApi} opts={{ loop: true, duration: 24 }}>
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <div className="relative h-[340px] sm:h-[420px] lg:h-[520px]">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,23,44,0.15)_0%,rgba(13,62,120,0.45)_100%)]" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
