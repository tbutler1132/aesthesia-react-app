import { Link } from "react-router-dom"
import styles from "../worlds.module.css"

function WorldCard({ title, imageUrl, id }) {
  return (
    <div className={styles.card}>
        <Link style={{textDecoration: "none"}} to={`${id}?title=${title.replace(/ /g,"_")}`}>
            <img src={imageUrl} alt="" />
            <WorldCardInfo header={title}/>
        </Link>
    </div>
  )
}

function WorldCardInfo({ header }) {
  return (
    <h3>{header}</h3>
  )
}

export default WorldCard