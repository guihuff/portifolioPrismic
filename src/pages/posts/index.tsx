

import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';

import thumbImg from '../../../public/images/tumb.jpg'
import Image from 'next/image';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
 
export default function Posts() {
  return (
    <>
      <Head>
        <title>Huff, G. F. - XP</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.projects}>
          <Link href={"/"}>
              <Image src={thumbImg} alt="Projeto um" 
                width={720}
                height={410}
                quality={100}
              />

              <strong>
                Projeto LStyle
              </strong>
              <time>Set. 2021 - Out. 2023</time>
              <p>Ferramenta de identificação de estilos de aprendizagem, para auxiliar os docentes em sua jornada de desenvolvimento de plano de ensino, focado em metodologias inovadoras e sugestivas.

                A ferramenta é focada nas metodologias de estilos de Honey-Alonso, e David Kolb.

                Iniciou-se a primeira versão com desenvolvimento em Python, HTML, CSS, Bootstrap e JS. (Descontinuada)

                Atualmente em sua segunda versão, trabalhamos com TypeScript, Express (NodeJS), ReactJS, Git e GitHub, além de outras ferramentas como Figma e ClickUP, a metodologia de trabalho utilizada é o Scrum.
              </p>
              <span>TypeScript · Node.js · React.js · PostgreSQL · Git · Docker · Scrum </span>
          </Link>  

          <div className={styles.buttonNavigate}>
              <button>
                <FiChevronLeft size={30} color="#fff"/>
              </button>
              <button>
                <FiChevronRight size={30} color="#fff"/>
              </button>
          </div>        
        </div>
        <div className={styles.certificates}>

        </div>
      </main>
    </>
  )
}