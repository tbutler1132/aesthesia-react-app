import styles from "../worlds.module.css"
import { useGetWorldVideosQuery } from "../worldsAPI"
import CircularProgress from "@mui/material/CircularProgress"
import { useParams } from "react-router-dom"

function Videos() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetWorldVideosQuery(id)

  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  if(isError) return <div className={styles.worldContainer}>Something Went wrong</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.videosContainer}>
        {data.map(video => 
          <video width="320" height="240" controls>
            <source src={video.file.asset.url} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}

export default Videos