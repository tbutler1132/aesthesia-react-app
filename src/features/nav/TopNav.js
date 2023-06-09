import { Link } from "react-router-dom"
import styles from './nav.module.css'
import { useDispatch } from 'react-redux';
import { hide } from '../../features/audioPlayer/audioPlayerSlice';
import { useLocation } from "react-router-dom";
import Switch from '@mui/material/Switch'
import { setTheme } from "../../app/themeSlice";
import { theme } from "../../app/themeSlice";
import { useSelector } from "react-redux";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const links = [
  {
    key: "worlds",
    message: "Worlds",
  }, 
  {
    key: "contact",
    message: "Contact"
  }
]

function TopNav() {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentTheme = useSelector(theme)

  const clickHandler = () => {
    dispatch(hide())
  }

  const switchChangeHandler = () => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <nav data-mode={currentTheme} className={styles.topNav}>
      <div>
        <Link onClick={clickHandler} to="/">
          <h2>Aesthesia</h2>
        </Link>
      </div>
      <div id={styles.topNavLinksContainer}>
        {links.map(link => 
        <div style={{textDecoration: location.pathname.substring(1) === link.key ? "underline" : "none"}} key={link.key} className={styles.topNavLinkContainer}>
          <Link onClick={clickHandler} to={link.key}>{link.message}</Link>  
        </div>
        )}
      </div>
      <div id={styles.topNavSwitchContainer}>
        <DarkModeIcon />
        <Switch onChange={switchChangeHandler} color="warning"/>
      </div>
    </nav>
  )
}

export default TopNav