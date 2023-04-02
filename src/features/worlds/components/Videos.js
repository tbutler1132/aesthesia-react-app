import styles from "../worlds.module.css"
import { useGetWorldVideosQuery } from "../worldsAPI"
import CircularProgress from "@mui/material/CircularProgress"
import { useParams } from "react-router-dom"
import VideoModal from "../../../app/components/VideoModal"

function Videos() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetWorldVideosQuery(id)

  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  if(isError) return <div className={styles.worldContainer}>Something Went wrong</div>
  return (
    <div data-mode='dark' className={styles.worldContainer}>
      <div className="verticalCardsContainer">
        {data.map(video => 
          <div key={video._id} style={{marginTop: "3rem"}}>
            <VideoModal thumbnail={video._id} key={video._id} header={video.title} url={video.file.asset.url} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Videos