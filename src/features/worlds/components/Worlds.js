import React from 'react'
import WorldCard from './WorldCard'
import { useGetWorldsQuery } from '../worldsAPI'
import styles from "../worlds.module.css"

function Worlds() {
  const { data, isLoading, isError} = useGetWorldsQuery()

  if(isLoading) return <div>Loading..</div>
  if(isError) return <div>Error</div>
  return (
    <div className={styles.worldsContainer}>
      {data.map(world => 
        <WorldCard imageUrl={world.cover_art[0].file.asset.url} title={world.title} id={world._id} world={world} key={world._id}/>
      )}
    </div>
  )
}


export default Worlds
