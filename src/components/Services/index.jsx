import React from "react";

export default function Index({ setCursorIsActive }) {
  return (
    <div className="flex flex-col justify-center items-center py-40 bg-white text-[#151515]">
      <h1
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
        className="text-[7.5vw] uppercase text-center max-w-[50vw] leading-none mx-16"
      >
        Unsere Leistungen sind hier vorgestellt
      </h1>
    </div>
  );
}


/*
import { FaTools, FaPaintRoller, FaCouch, FaHome } from "react-icons/fa";

const services = [
  {
    icon: <FaTools size={70} />,
    title: "Sanierungsarbeiten",
    description:
      "Umfassende Modernisierung und Wiederherstellung von Gebäuden.",
  },
  {
    icon: <FaPaintRoller size={70} />,
    title: "Renovierungsarbeiten",
    description: "Auffrischung und Erneuerung von Innen- und Außenbereichen.",
  },
  {
    icon: <FaCouch size={70} />,
    title: "Tischlererbeiten",
    description: "Maßgeschneiderte Holzarbeiten für Möbel und Innenausbau.",
  },
  {
    icon: <FaHome size={70} />,
    title: "EFH Neubau",
    description:
      "Planung und Bau von Einfamilienhäusern nach höchsten Standards.",
  },
];

export default function Index({ setCursorIsActive }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-40 bg-white text-[#151515]">
      <h1
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
        className="lg:text-[5.5vw] text-[8.5vw] uppercase font-bold text-center max-w-[70vw] leading-none mb-16"
      >
        Unsere Leistungen
      </h1>
      <div 
        onMouseEnter={() => setCursorIsActive(true)}
        onMouseLeave={() => setCursorIsActive(false)}
        className="flex lg:flex-row flex-col flex-gap w-full justify-between items-center px-14"
      >
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center mb-10 lg:max-w-1/5 max-w-none">
            <div className="mb-3">{service.icon}</div>
            <h2 className="text-[1.25em] font-semibold uppercase">{service.title}</h2>
            <p className="font-semibold opacity-70">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
*/