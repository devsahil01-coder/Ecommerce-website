import { useEffect, useState } from "react";

const slides = [
  {
    title: "Discover Latest Trends",
    subtitle: "Shop premium fashion, beauty and electronics.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400",
  },
  {
    title: "Summer Collection 2026",
    subtitle: "Upgrade your wardrobe with fresh arrivals.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400",
  },
  {
    title: "Tech & Gadgets Sale",
    subtitle: "Latest smartphones, laptops and accessories.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1400",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-lg">

        <img
          src={slides[current].image}
          className="w-full h-full object-cover"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="text-white px-8 md:px-16 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[current].title}
            </h1>

            <p className="text-lg mb-6">
              {slides[current].subtitle}
            </p>

            <button className="bg-green-600 px-6 py-3 rounded-lg font-semibold">Shop Now</button>
          </div>
        </div>

        
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
             
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}