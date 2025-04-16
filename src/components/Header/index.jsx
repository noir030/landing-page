"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";

export default function index({ setCursorIsActive }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.width = "100%";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [isActive]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="Flex Sharing Logo"
            onMouseEnter={() => setCursorIsActive(true)}
            onMouseLeave={() => setCursorIsActive(false)}
            className={styles.logoImg}
          />
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          onMouseEnter={() => setCursorIsActive(true)}
          onMouseLeave={() => setCursorIsActive(false)}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav setCursorIsActive={setCursorIsActive}  />}</AnimatePresence>
    </div>
  );
}
