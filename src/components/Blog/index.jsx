import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index({ setCursorIsActive }) {
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem><p>HHH</p></CarouselItem>
          <CarouselItem><p>HHH</p></CarouselItem>
          <CarouselItem><p>HHH</p></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
