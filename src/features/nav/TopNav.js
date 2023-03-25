import { Link } from "react-router-dom"
import styles from './nav.module.css'

function TopNav() {
  return (
    <nav className={styles.topNav}>
      <div className={styles.logoContainer}>
        <Link style={{textDecoration: "none", color: "black"}} to="/worlds">
          <h1>Sancta Vasa</h1>
        </Link>
      </div>
    </nav>
  )
}

export default TopNav