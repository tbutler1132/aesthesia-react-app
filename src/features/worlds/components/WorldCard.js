import { Link } from "react-router-dom"
import styles from "../worlds.module.css"

function WorldCard({ world }) {
  return (
    <div className={styles.card}>
        <img height="250" width="250" src={world.art_url} alt="" />
        <Link style={{textDecoration: "none", color: "black"}} to={`${world.id}`}>
            <h3>{world.title}</h3>
        </Link>
    </div>
  )
}

export default WorldCard