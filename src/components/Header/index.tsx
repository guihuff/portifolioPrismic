import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo-dark-theme-ci.svg'

import { ActiveLink } from '../ActiveLink'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href={'/'} activeClassName={styles.active}>
          <a><Image src={logo} alt='Guilherme Feier Huff Logo' height={96} width={170}/></a>
        </ActiveLink>
        <nav>
          <ActiveLink href={'/'} activeClassName={styles.active}> 
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href={'/posts'} activeClassName={styles.active} > 
            <a>Experiências</a>
          </ActiveLink>

          <ActiveLink href={'/sobre'} activeClassName={styles.active}> 
            <a>Sobre mim</a>
          </ActiveLink>

        </nav>
        <a className={styles.contactButton} type="button" href='https://sujeitoprogramador.com'>Contatar</a>

      </div>
    </header>
  )
}