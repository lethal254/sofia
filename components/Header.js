import { Link } from "react-scroll"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Sophia.</h1>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='gallery'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
