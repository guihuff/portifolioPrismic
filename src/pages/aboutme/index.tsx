import { GetStaticProps } from "next";
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

import { createClient } from "@/prismicio";
import { RichText } from "prismic-dom";

type Academic = {
  slug: string;
  institution: string;
  course: string;
  date: string;
  local: string;
  description: string;
}

type Courses = {
  slug: string;
  title: string;
  school: string;
  teacher: string;
  hours: string;
  conclusion: string;
  description: string;
  credentials: string;
}

type Content = {
  texto_sobre: {
    type: string;
    text: string;
    spans: []
  }[];
  link_github: string;
  link_linkdin: string;
  academic: Academic[];
  courses: Courses[];
}

interface ContentProps {
  content: Content;
}

export default function AboutMe({content}: ContentProps) {
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
            {content.texto_sobre.map((item, index) => {
              return ( 
                <p key={index}>
                  {item.text}
                </p>
              )
            })}
            <div className={styles.social}>
              <a href={content.link_github}><BiLogoGithub size={30}/></a>
              <a href={content.link_linkdin}><CiLinkedin size={30}/></a>
            </div>
          </div>
          <Image src={Logo} alt="Logo Guilherme Feier Huff" className={styles.logo}/>
        </section>
        <section className={styles.studyContainer}>
          <h1>Formação Acadêmica</h1>
          <ul className={styles.studyList}>
            {content.academic.map(item => {
              return (
                <li key={item.slug}>
                  <div className={styles.liStudyTitle}>
                    <div>
                      <h3>{item.institution}</h3>
                      <h4>{item.course}</h4>
                    </div>
                    <div>
                      <p>{item.local}</p>
                      <p>{item.date}</p> 
                    </div> 
                  </div>
                  <h5>Áreas de estudo do curso:</h5> 
                  <p>
                    {item.description}
                  </p>
                </li>     
              )
            })}
                   
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
              {content.courses.map(item => {
                return (
                <motion.li key={item.slug} className={styles.itemCarrossel}>
                  <h3>{item.title}</h3>
                  <div className={styles.liStudyTitleCarrossel}>
                    <div>
                      <h4>{item.school} - {item.teacher}</h4>
                    </div>
                    <div>
                      <p>{item.hours} horas</p>
                      <p>{item.conclusion}</p>
                    </div>
                  </div>
                  <p className={styles.carrosselText}>{item.description}</p>
                  <a href={item.credentials} target="_blank">Certificado</a>
                </motion.li>
                )
              })}
              
            </motion.ul>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = createClient({ previewData });

  const response = await prismic.getSingle("aboutme", { lang: "pt-br"});
  const responseAcademic = await prismic.getByType("academic", { 
    lang: "pt-br",
  });
  const responseCourses= await prismic.getByType("courses", { 
    lang: "pt-br",
  });

  const {
    texto_sobre, link_github, link_linkdin
  } = response.data;

  const academic = responseAcademic.results.map(item => {
    return {
      slug: item.uid,
      institution: RichText.asText(item.data.institution),
      course: RichText.asText(item.data.curso),
      date: RichText.asText(item.data.data),
      local: RichText.asText(item.data.local),
      description: RichText.asText(item.data.areas_de_estudo),
    }
  });

  const courses = responseCourses.results.map(item => {
    return {
      slug: item.uid,
      title: RichText.asText(item.data.title),
      school: RichText.asText(item.data.school),
      teacher: RichText.asText(item.data.teacher),
      hours: RichText.asText(item.data.hours),
      conclusion: RichText.asText(item.data.conclusion),
      description: RichText.asText(item.data.course_content),
      credentials: item.data.certificed.url,
    }
  });

  const content = {
    texto_sobre,
    link_github: link_github.url,
    link_linkdin: link_linkdin.url,
    academic,
    courses
  }

  return {
    props:{
      content
    }, 
    revalidate: 60 * 15 //cada 2 minutos
  }
}