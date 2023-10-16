import Head from "next/head";
import styles from './styles.module.scss'
import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "../../../public/images/logo-dark-theme-ci.svg";
import { CiLinkedin  } from "react-icons/ci"
import { BiLogoGithub  } from "react-icons/bi"
import { ProgressBar } from "@/components/ProgressBar";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";


export default function AboutMe() {
  const carosel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carosel.current!.scrollWidth - carosel.current!.offsetWidth);
  }, []);
  return (
    <>
      <Head>
        <title>About Me - Huff, G F.</title>
      </Head>
      <main className={styles.container}>
        <ProgressBar />
        <section className={styles.apresentationText}>
          <div>
            <h1>Sobre mim</h1>
            <p>
              Graduando em Ciência da Computação na Universidade Tecnológica Federal do Paraná (UTFPR). 
              Tenho uma sólida dedicação à engenharia de software, respaldada por minha experiência 
              em desenvolvimento web fullstack,bem como meu entendimento das práticas ágeis, incluindo
              o framework Scrum.
            </p>
            <p>
              Ao longo do meu percurso acadêmico, vivenciei uma jornada repleta de estágios de aprendizado enriquecedores. 
              Essas experiências me proporcionaram a oportunidade de explorar uma ampla gama de linguagens de programação, 
              estruturas de dados e a criação de sistemas. Além disso, adquiri conhecimentos na construção e gestão de bancos 
              de dados, bem como na compreensão dos fundamentos das redes de computadores e sistemas operacionais.
            </p>
            <p>
              À medida que avançava no curso, direcionei minha dedicação para a esfera da engenharia de software, 
              concentrando{"‐"}me em habilidades cruciais    como a elicitação de requisitos e a aplicação prática 
              de metodologias ágeis, incluindo o Scrum. Simultaneamente, mergulhei no mundo da programação voltada 
              para a web. Começando pelo desenvolvimento frontend, atualmente foco minha expertise no backend, 
              trabalhando com tecnologias como Node.js e a linguagem Go.
            </p>
            <p>
              Estou direcionando minha busca principalmente para oportunidades nas áreas de desenvolvimento, 
              análise ou teste, com foco em posições de backend. No entanto, estou apto a desempenhar atividades 
              no frontend ou atuar como administrador de banco de dados, caso necessário.
            </p>
            <div className={styles.social}>
              <a href="/"><BiLogoGithub size={30}/></a>
              <a href="/"><CiLinkedin size={30}/></a>
            </div>
          </div>
          <Image src={Logo} alt="Logo Guilherme Feier Huff" className={styles.logo}/>
        </section>
        <section className={styles.studyContainer}>
          <h1>Formação Acadêmica</h1>
          <ul className={styles.studyList}>
            <li>
              <div className={styles.liStudyTitle}>
                <div>
                  <h3>Universidade Tecnológica Federal do Paraná (UTFPR)</h3>
                  <h4>Bacharelado em Ciência Da Computação</h4>
                </div>
                <div>
                  <p>Santa Helena, PR</p>
                  <p>março 2019 – dez. 2023</p> 
                </div> 
              </div>
              <h5>Áreas de estudo do curso:</h5> 
              <p>
                Sistemas Gerenciadores de Banco de Dados, Redes, Compiladores, Teoria da Computação, 
                Desenvolvimento Web, Sistemas Operacionais, Engenharia de Software, IA, entre outros...
              </p>
            </li>            
          </ul>
        </section>
        <section className={styles.studyContainer}>
          <h1>Formação Complementar</h1>
          <motion.div ref={carosel} className={styles.carrossel} 
            whileTap={{cursor: 'grabbing'}}
            drag="x"
            dragConstraints={{right:0, left: -width}}
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
          >
            <motion.ul className={styles.innerCarrossel}>
              <motion.li className={styles.itemCarrossel}>
                <h3>Titulo do curso</h3>
                <div className={styles.liStudyTitleCarrossel}>
                  <div>
                    <h4>Escola - Professor</h4>
                  </div>
                  <div>
                    <p>horas</p>
                    <p>Ano</p>
                  </div>
                </div>
                <p className={styles.carrosselText}>conteudo do xurso resumidamente</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}