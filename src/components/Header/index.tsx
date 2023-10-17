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

          <ActiveLink href={'/aboutme'} activeClassName={styles.active}> 
            <a>Sobre mim</a>
          </ActiveLink>

        </nav>
        <a className={styles.contactButton} type="button" target='_blank' href='https://api.whatsapp.com/send?phone=5551995119425&text=Ol%C3%A1,%20vim%20pelo%20seu%20site!'>Contatar</a>

      </div>
    </header>
  )
}