import { GetStaticProps } from 'next';

import Head from 'next/head';
import styles from './styles.module.scss';

import Image from 'next/image';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { createClient } from "@/prismicio";
import { RichText } from "prismic-dom";
import { useState } from 'react';

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
  page: string;
  totalPages: string;
}

export default function Posts({ posts: postsBlog, totalPages, page }: PostsProps) {
  
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [posts, setPosts] = useState(postsBlog || []);

  async function reqPost(pageNumber: number) {
    const prismic = createClient({ });
    const response = await prismic.getByType("experience", { 
      lang: "pt-br",
      pageSize: 1,
      page: pageNumber
    });
    return response;
  }

  const handleBack = async () => {
    const pageNumber = Number(currentPage - 1);
    const response = await reqPost(pageNumber);
    if(response.results.length === 0){
      return;
    }
    const newPost = response.results.map(post => {
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
        link: post.data.link.url,
      }
    });
    setCurrentPage(pageNumber);
    setPosts(newPost);
  }

  const handleNext = async () => {
    const pageNumber = Number(currentPage + 1);
    const response = await reqPost(pageNumber);
    if(response.results.length === 0){
      return;
    }
    const newPost = response.results.map(post => {
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
        link: post.data.link.url,
      }
    });
    setCurrentPage(pageNumber);
    setPosts(newPost);
  }

  return (
    <>
      <Head>
        <title>XP - Huff, G. F.</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.projects}>
          {posts.map(item => {
            return (
              <a href={item.link}>
                <Image src={item.cover} alt="Projeto um" 
                  width={720}
                  height={410}
                  quality={75}
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0rAcAAQcAwniY66EAAAAASUVORK5CYII='
                />

                <strong>
                  {item.title}
                </strong>
                <time>{item.date}</time>
                <p>
                  {item.description.map((item, index) => {
                    return <span key={index}>{item} <br /></span>
                  })}
                </p>
                <h4>{item.tecnologies}</h4>
              </a>  
            )
          })}
          

          <div className={styles.buttonNavigate}>
            { Number(currentPage) >= 2 && (
              <button onClick={handleBack}>
                <FiChevronLeft size={30} color="#fff"/>
              </button>
            )}
            <div></div>
            { Number(currentPage) < Number(totalPages) && (
              <button onClick={handleNext}>
                <FiChevronRight size={30} color="#fff"/>
              </button>
            )}
          </div>        
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
      link: post.data.link.url,
    }
  });

  return {
    props:{
      posts, 
      page: response.page,
      totalPages: response.total_pages
    }, 
    revalidate: 60 * 30 //cada 0,5 horas
  }
}