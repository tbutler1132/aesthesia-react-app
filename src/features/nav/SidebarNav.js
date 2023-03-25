import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.css'
import { useParams, useLocation } from 'react-router-dom';

//MUI ICONS
import PublicIcon from '@mui/icons-material/Public';
import BrushIcon from '@mui/icons-material/Brush';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import NightlifeIcon from '@mui/icons-material/Nightlife';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

function SidebarNav() {
  let { id } = useParams();
  let location = useLocation();

  const currentPageParam = location.pathname.split('/')[location.pathname.split('/').length - 1]

  const links = [
    {
      key: "art",
      message: "Art",
      icon: <BrushIcon />
    },
    {
      key: "videos",
      message: "Videos",
      icon: <OndemandVideoIcon />
    },
    // {
    //   key: "beats",
    //   message: "Beats",
    //   icon: <NightlifeIcon />
    // },
    // {
    //   key: "audio",
    //   message: "Audio",
    //   icon: <MusicNoteIcon />
    // },
    // {
    //   key: "blog",
    //   message: "Blog",
    //   icon: <NoteAltOutlinedIcon />
    // },
  ]

  return (
    <nav className={styles.sidebarNav}>
        <h1>World 1</h1>
        <Link style={{color: currentPageParam === "1" ? "green" : "black",}} className={styles.sidebarLinkContainer} to={`/worlds/${id}`}>
          <PublicIcon />
          <span>Core</span>
        </Link>
        {links.map(el => 
          <Link 
            key={el.key} 
            style={{
              color: currentPageParam === el.key ? "green" : "black",
            }} 
            className={styles.sidebarLinkContainer} 
            to={el.key}>
              {el.icon}
            <span>{el.message}</span>
          </Link>
        )}
    </nav>
  )
}

export default SidebarNav
