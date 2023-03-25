import styles from "../worlds.module.css"
import { useGetWorldVideosQuery } from "../worldsAPI"

function Videos() {
  const { data, isLoading, isError } = useGetWorldVideosQuery("1")

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Is error</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.videosContainer}>
        {data.map(el => 
          <video width="320" height="240" controls>
            <source src={el.url} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}

export default Videos