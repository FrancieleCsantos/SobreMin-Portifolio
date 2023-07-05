import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <li>
        <Link className={styles.menuLink} to="/">Home</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/portfolio">Portfólio</Link>
      </li>
      <li>
        <Link className={styles.menuLink} to="/contato">Contato</Link>
      </li>
    </nav>
  )
}

export default Menu
