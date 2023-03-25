import styles from "../worlds.module.css"
import { useLocation } from "react-router-dom";

function WorldHeader() {

    let location = useLocation();
    const currentPageParam = location.pathname.split('/')[location.pathname.split('/').length - 1]

    if(currentPageParam !== "1") return null
    return (
        <div className={styles.worldHeader}>
            <h3 style={{marginLeft: ".5rem"}}>The core is the basic concept for each world and will eventual develop into the final song</h3>
        </div>
    )
}

export default WorldHeader