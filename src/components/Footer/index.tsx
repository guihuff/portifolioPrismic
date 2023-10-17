import styles from './styles.module.scss';
import Image from "next/image";

import techsImage from '../../../public/images/techs.svg';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <span>© Copyright © 2023. Todos os direitos reservados.</span>
        <Image src={techsImage} alt="Tecnologias" height={32} quality={70}></Image>
      </div>      
    </footer>
  )
}