import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo-dark-theme-ci.svg'

import Link from 'next/link'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a><Image src={logo} alt='Guilherme Feier Huff Logo'/></a>

        <nav>
          <Link href={'/'} legacyBehavior> 
            <a>Home</a>
          </Link>
          <Link href={'/'} legacyBehavior> 
            <a>Conteúdos</a>
          </Link>
          <Link href={'/'} legacyBehavior> 
            <a>Quem somos?</a>
          </Link>

        </nav>
        <a className={styles.contactButton} type="button" href='https://sujeitoprogramador.com'>Contatar</a>

      </div>
    </header>
  )
}