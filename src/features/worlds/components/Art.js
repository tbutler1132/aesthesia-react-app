import { useGetWorldArtQuery } from "../worldsAPI"
import styles from "../worlds.module.css"

function Art() {
  const { data, isLoading, isError } = useGetWorldArtQuery("1")
  
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.artContainer}>
        {data.map(el => 
          <img height={250} width={250} src={el.url} alt=""/>
        )}
      </div>
    </div>
  )
}

export default Art