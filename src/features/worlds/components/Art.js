import { useGetWorldArtQuery } from "../worldsAPI"
import styles from "../worlds.module.css"
import CircularProgress from "@mui/material/CircularProgress"
import { useParams } from "react-router-dom"

function Art() {
  let { id } = useParams()
  const { data, isLoading, isError } = useGetWorldArtQuery(id)

  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  if(isError) return <div>Error</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.artContainer}>
        {data.map(art => 
          <img height={250} width={250} src={art.file.asset.url} alt=""/>
        )}
    </div>
    </div>
  )
}

export default Art