"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/images/intro.jpg", "/images/water.jpg", "/images/intro.jpg"];

export default function Index({setCursorIsActive}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
  });

  return (
    <div className="flex flex-col items-center justify-center my-24 px-6">
      <h1
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
        className="text-[7.5vw] uppercase text-center max-w-[50vw] leading-none m-16"
      >
        Unsere Blog
      </h1>
      <div className="relative w-full max-w-7xl overflow-hidden shadow-lg">
        <div ref={sliderRef} className="keen-slider h-[700px]">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center items-center relative"
            >
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </div>

        {/* Лево */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        {/* Право */}
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </div>
      {/* Кнопка инсты */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition uppercase"
      >
        Zu Instagram
      </a>
    </div>
  );
}
