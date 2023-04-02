import { Link } from "react-router-dom"
import styles from './nav.module.css'
import { useDispatch } from 'react-redux';
import { hide } from '../../features/audioPlayer/audioPlayerSlice';
import { useLocation } from "react-router-dom";

const links = [
  {
    key: "worlds",
    message: "Worlds",
  },
  {
    key: "about",
    message: "About",
  }
]

function TopNav() {
  const dispatch = useDispatch();
  const location = useLocation();

  const clickHandler = () => {
    dispatch(hide())
  }

  return (
    <nav className={styles.topNav}>
      <div className={styles.logoContainer}>
        <Link onClick={clickHandler} to="/worlds">
          <h2>Sancta Vasa</h2>
        </Link>
      </div>
      <div className={styles.topNavLinksContainer}>
        {links.map(link => 
        <div style={{textDecoration: location.pathname.substring(1) === link.key ? "underline" : "none"}} key={link.key} className={styles.topNavLinkContainer}>
          <Link to={link.key}>{link.message}</Link>  
        </div>
        )}
      </div>
    </nav>
  )
}

export default TopNav