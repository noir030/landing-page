import { React, useRef } from "react";
import { projects } from "../../data";
import { useScroll } from "framer-motion";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

export default function Index({ setCursorIsActive }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center py-30 text-white bg-[#151515]"
    >
      <h1
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
        className="text-[5.5vw] uppercase text-center max-w-[70vw] leading-none mb-16"
      >
        Wir haben Vielseitige Projekterfahrung
      </h1>
      <div className="my-6 lg:block hidden">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              url=""
            />
          );
        })}
      </div>
      <Button
        variant="secondary"
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
        className="text-2xl font-medium"
      >
        Alle Projekte
      </Button>
    </div>
  );
}
