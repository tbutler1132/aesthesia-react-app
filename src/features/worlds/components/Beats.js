import { useGetWorldBeatsQuery } from "../worldsAPI"
import AudioCard from "../../../app/components/AudioCard"
import styles from "../worlds.module.css"

function Beats() {
  const { data, isLoading } = useGetWorldBeatsQuery("1")

  if(isLoading) return <div>Loading...</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.audioCardsContainer}>
        {data.map(el => 
          <AudioCard key={el.bpm} src={el.master_url} art={el.art} title={el.master_url} header={el.title} date={el.bpm}/>
        )}
      </div>
    </div>
  )
}

export default Beats