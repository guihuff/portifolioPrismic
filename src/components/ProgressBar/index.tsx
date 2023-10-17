import styles from './styles.module.scss';

import { motion, useScroll } from "framer-motion";


export function ProgressBar (){
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.progressbar}
      style={{ scaleX: scrollYProgress }}
    />
  )
}