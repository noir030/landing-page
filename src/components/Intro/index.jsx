import React from "react";
import Image from "next/image";
import Background from "../../../public/images/intro.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Index() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return (
    <div className="h-screen relative overflow-hidden">
      <motion.div style={isLargeScreen ? { y, willChange: "transform" } : {}} className="relative h-full">
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
  );
}
