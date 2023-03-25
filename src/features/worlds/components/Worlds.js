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
      {data.map(el => 
        <WorldCard world={el} key={el.id}/>
      )}
    </div>
  )
}


export default Worlds
