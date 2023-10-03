import { GetStaticProps } from 'next';

import Head from 'next/head';
import styles from './styles.module.scss';

import Image from 'next/image';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { createClient } from "@/prismicio";
import { RichText } from "prismic-dom";

type Post = {
  slug: string;
  title: string
  description: string[];
  cover: string;
  date: string;
  tecnologies: string;
  link: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  console.log(posts)
  return (
    <>
      <Head>
        <title>XP - Huff, G. F.</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.projects}>
          <a href={posts[0].link}>
              <img src={posts[0].cover} alt="Projeto um" 
                width={720}
                height={410}
              />

              <strong>
                {posts[0].title}
              </strong>
              <time>{posts[0].date}</time>
              <p>
                {posts[0].description.map((item, index) => {
                  return <span key={index}>{item} <br /></span>
                })}
              </p>
              <h4>{posts[0].tecnologies}</h4>
          </a>  

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

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = createClient({ previewData });

  const response = await prismic.getByType("experience", { 
    lang: "pt-br",
    pageSize: 1
  });

  // console.log(JSON.stringify(response, null, 2));

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: post.data.description.map(item => {
        return item.text
      }),
      cover: post.data.cover.url,
      date: `${new Date(`${post.data.init_date}`).toLocaleDateString('pt-BR', {
        month: 'short',
        year: 'numeric'
      })} - ${new Date(`${post.data.end_date}`).toLocaleDateString('pt-BR', {
        month: 'short',
        year: 'numeric'
      })}`,
      tecnologies: RichText.asText(post.data.tecnologies),
      link: post.data.link  
    }
  });

  // console.log(posts)
  
  // const content = {}

  return {
    props:{
      posts
    }, 
    revalidate: 60 * 30 //cada 0,5 horas
  }
}