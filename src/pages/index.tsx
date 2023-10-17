import { GetStaticProps } from 'next'
import Head from 'next/head'

import styles from '../styles/home.module.scss'
import { Footer } from '@/components/Footer'

import { createClient } from "@/prismicio";
import { RichText } from "prismic-dom";
import * as prismicH from '@prismicio/helpers';

import { ProgressBar } from '@/components/ProgressBar';

type Content = {
  title: string;
  subtitle: string;
  link_action: string;
  desktop_title : string;
  desktop_content: string;
  desktop_image: string; 
  mobile_title: string;
  mobile_content: string; 
  mobile_image: string;
}

interface ContentProps {
  content: Content;
}

export default function Home({content}: ContentProps) {
  return (
    <>
      <Head>
        <title>Home - Huff, G F.</title>
      </Head>
      <main className={styles.container}>
        <ProgressBar />
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.subtitle}</span>
            <a href={content.link_action}>
              <button>
                VER MAIS!
              </button>
            </a>
          </section>
          <img 
              src='/images/banner-conteudos.png'
              alt="Tecnologias Guilherme Huff"
          />
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <img src={content.desktop_image} alt="Conteúdos desenvolvimento de aplicacoes web" />

          <section>
            <h2>{content.desktop_title}</h2>
            <span>{content.desktop_content}</span>
          </section>
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobile_title}</h2>
            <span>{content.mobile_content}</span>
          </section>

          <img src={content.mobile_image} alt="Conteúdos desenvolvimento de apps" />
        </div>

        
      </main>
      <Footer />

    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = createClient({ previewData });

  const response = await prismic.getSingle("homepage", { lang: "pt-br"})

  // console.log(response.data)

  const {
    title, subtitle, link_action,
    desktop_title, desktop_content, desktop_image, 
    mobile_title, mobile_content, mobile_image
  } = response.data;
  
  const content = {
    title: RichText.asText(title),
    subtitle: RichText.asText(subtitle),
    link_action: prismicH.asLink(link_action),
    desktop_title : RichText.asText(desktop_title),
    desktop_content: RichText.asText(desktop_content),
    desktop_image: desktop_image.url, 
    mobile_title: RichText.asText(mobile_title),
    mobile_content: RichText.asText(mobile_content), 
    mobile_image: mobile_image.url,
  }

  return {
    props:{
      content
    }, 
    revalidate: 60 * 30 //cada 30 minutos
  }
}