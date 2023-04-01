import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import styles from './nav.module.css'
import { useParams, useLocation } from 'react-router-dom';

//MUI ICONS
import PublicIcon from '@mui/icons-material/Public';
import BrushIcon from '@mui/icons-material/Brush';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import NightlifeIcon from '@mui/icons-material/Nightlife';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

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

function SidebarNav() {
  let { id } = useParams();
  let location = useLocation();
  let [searchParams] = useSearchParams();

  const worldTitle = searchParams.get("title").replace(/_/g," ")

  const worldTitleParam = "title=" + worldTitle

  const currentPageParam = location.pathname.split('/')[location.pathname.split('/').length - 1]


  return (
    <nav className={styles.sidebarNav}>
        <h1>{worldTitle}</h1>
        <Link style={{color: currentPageParam !== "art" && currentPageParam !== "videos" ? "green" : "black",}} className={styles.sidebarLinkContainer} to={`/worlds/${id}?${worldTitleParam}`}>
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
            to={`${el.key}?${worldTitleParam}`}>
              {el.icon}
            <span>{el.message}</span>
          </Link>
        )}
    </nav>
  )
}

export default SidebarNav
