import styles from "../worlds.module.css"
import { useGetWorldBranchesQuery } from "../worldsAPI"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"
import AudioCard from "../../../app/components/AudioCard"
import { theme } from '../../../app/themeSlice'
import { useSelector } from "react-redux"

function Branches() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetWorldBranchesQuery(id)
  const currentTheme = useSelector(theme)
  console.log(data)

  if(isError) return <div className={styles.worldContainer}>Something Went wrong</div>
  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  return (
    <div data-mode={currentTheme} className={styles.worldContainer}>      
      <div className={styles.audioCardsContainer}>
        {!data ? <div>Currently this world has no branches</div> 
        : 
        data.map(el => 
          <AudioCard key={el._id} src={el.file.asset.url} art={el.artwork.file.asset.url} header={el.title} date={el._createdAt}/>
        )
        }
      </div>
    </div>
  )
}

export default Branches