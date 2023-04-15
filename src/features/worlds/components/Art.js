import { useGetWorldArtQuery } from "../worldsAPI"
import styles from "../worlds.module.css"
import CircularProgress from "@mui/material/CircularProgress"
import { useParams } from "react-router-dom"
import { theme } from '../../../app/themeSlice'
import { useSelector } from 'react-redux'

function Art() {
  let { id } = useParams()
  const { data, isLoading, isError } = useGetWorldArtQuery(id)
  const currentTheme = useSelector(theme)

  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  if(isError) return <div>Error</div>
  return (
    <div data-mode={currentTheme} className={styles.worldContainer}>
      <div id={styles.artContainer}>
        {data.map(art => 
          <div id={styles.artCard}>
            <img key={art._id} src={art.file.asset.url} alt=""/>
          </div>
        )}
    </div>
    </div>
  )
}

export default Art