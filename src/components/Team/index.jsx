import Image from "next/image";
import Background from "../../../public/images/team.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 lg:p-20 py-20 px-5 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="lg:w-[50vw] lg:text-[2vw] text-[5.5vw] self-end uppercase mix-blend-difference">
          Wir verstehen uns als professionellen, nachhaltigen und persönlichen
          Dienstleister für den privaten Immobiliensektor im Großraum Berlin
        </p>
        <p className="lg:text-[5vw] text-[11.5vw] uppercase mix-blend-difference font-bold">
          Unsere Team
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{
              objectFit: "cover",
              filter: "grayscale(100%) brightness(0.3)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
