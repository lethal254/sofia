import { useState } from "react"
import { Link } from "react-scroll"
import styles from "../styles/MobileHeader.module.css"

const MobileHeader = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={styles.mobileHeader}>
      <h1>Sophie.</h1>
      <div
        className={styles.burger}
        onClick={() => {
          setShowNav(!showNav)
        }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        className={styles.navigation}
        style={{ transform: `${showNav ? "translateX(0)" : ""}` }}>
        <h2>Sophie.</h2>
        <ul>
          <li>
            <Link
              onClick={() => {
                setShowNav(!showNav)
              }}
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
              onClick={() => {
                setShowNav(!showNav)
              }}
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
              onClick={() => {
                setShowNav(!showNav)
              }}
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

export default MobileHeader
