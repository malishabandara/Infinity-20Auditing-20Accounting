import { useState, useEffect } from "react";

interface Logo {
  name: string;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    name: "KELLER",
    src: "https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2Fc4f7bcbc7e5343c98079c6cdcc39c2a0?format=webp&width=800",
    alt: "KELLER",
  },
  {
    name: "Idealhomes",
    src: "https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2Ffdd2b1fdad114222a3463ad6c8f8f2a1?format=webp&width=700",
    alt: "Idealhomes Real Estate",
  },
  {
    name: "EURO",
    src: "https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2F8e764ccb0121497abd58e23a58b6f538?format=webp&width=800",
    alt: "EURO",
  },
  {
    name: "Al-Boudrah",
    src: "https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2Fa98e26005f164e0a855d8c2595e2a67e?format=webp&width=800",
    alt: "Al-Boudrah",
  },
  {
    name: "TEAM GLOBAL",
    src: "https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2F983c7fc17e6c431e8282735faa2207c2?format=webp&width=700",
    alt: "TEAM GLOBAL",
  },
  {
    name: "al-farhan",
    src: "https://cdn.builder.io/api/v1/image/assets%2F448d97f159934d6f9784cc345239a44a%2F4f53932bcab543eaadb7d0498aacd801?format=webp&width=800",
    alt: "al-farhan advertising & printing",
  },
];

export function LogoCarousel() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (logos.length * 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-8 sm:gap-12 lg:gap-16">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              transform: `translateX(calc(-${offset}px))`,
              transition: "transform linear",
            }}
          >
            <div className={`flex items-center justify-center rounded-full border-2 border-border/60 bg-white p-4 flex-shrink-0 ${
              ["Idealhomes", "TEAM GLOBAL"].includes(logo.name)
                ? "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                : "w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
            }`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
