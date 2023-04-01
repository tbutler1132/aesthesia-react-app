import React from 'react'
import WorldCard from './WorldCard'
import { useGetWorldsQuery } from '../worldsAPI'
import styles from "../worlds.module.css"
import CircularProgress from '@mui/material/CircularProgress'

function Worlds() {
  const { data, isLoading, isError} = useGetWorldsQuery()

  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  if(isError) return <div>Error</div>
  return (
      <div className={styles.worldsContainer}>
        <h1>Worlds</h1>
        <div className="horizontalCardsContainer">
          {data.map(world => 
            <WorldCard imageUrl={world.cover_art[0].file.asset.url} title={world.title} id={world._id} key={world._id}/>
          )}
        </div>
    </div>
  )
}

export default Worlds