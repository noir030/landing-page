'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';

const links = [
  {
    title: "Leistungen",
    href: "/"
  },
  {
    title: "Team",
    href: "/"
  },
  {
    title: "Karriere",
    href: "/"
  },
  {
    title: "Blog",
    href: "/"
  },
  {
    title: "Contact",
    href: "/"
  }
]

export default function Index({ setCursorIsActive }) {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} setCursorIsActive={setCursorIsActive} />
        </div>
      </div>
    </motion.div>
  )
}