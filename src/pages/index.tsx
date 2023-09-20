import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Huff, G F.</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Desenvolvedor Full-Stack</h1>
            <span>Então, se você, por exemplo, removeu o foco de algo e deseja colocá-lo de volta no mesmo estilo padrão do navegador, ou deseja aplicar um estilo de foco a um elemento quando ele não está diretamente em foco, isso pode ser útil. </span>
            <a>
              <button>
                VER MAIS!
              </button>
            </a>
          </section>
          <img 
              src='/images/banner-conteudos.png'
              alt="Conteúdos Sujeito Programador"
          />
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Conteúdos desenvolvimento de aplicacoes web" />

          <section>
            <h2>Sistemas Web Completos</h2>
            <span>Criação de sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </div>

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>Aplicativos para Android e iOS</h2>
            <span>Desenvolvimento de apps nativos para iOS e Android, construindo aplicativos do zero.</span>
          </section>

          <img src="/images/financasApp.png" alt="Conteúdos desenvolvimento de apps" />
        </div>

        
      </main>
    </>
  )
}
