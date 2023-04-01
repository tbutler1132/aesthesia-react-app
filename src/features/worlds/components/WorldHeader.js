import styles from "../worlds.module.css"
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function WorldHeader({ headerText }) {

    let location = useLocation();
    const currentPageParam = location.pathname.split('/')[location.pathname.split('/').length - 1]

    if(currentPageParam === "videos" || currentPageParam === "art") return null
    return (
        <div className={styles.worldHeader}>
            <div style={{margin: "0 1rem 0 1rem"}}>
                <h2>{headerText}</h2>
            </div>
        </div>
    )
}

WorldHeader.propTypes = {
    headerText: PropTypes.string,
}

export default WorldHeader