import { Link } from "react-router-dom"
import styles from "../worlds.module.css"

function WorldCard({ title, imageUrl, id }) {
  return (
    <div className={styles.card}>
        <Link style={{textDecoration: "none", color: "black"}} to={`${id}?title=${title.replace(/ /g,"_")}`}>
            <img src={imageUrl} alt="" />
            <h3>{title}</h3>
        </Link>
    </div>
  )
}

export default WorldCard