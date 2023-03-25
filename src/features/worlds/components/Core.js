import React from 'react'
import { useGetWorldQuery } from '../worldsAPI'
import styles from "../worlds.module.css"
import AudioCard from '../../../app/components/AudioCard'

function Core() {
  const { data, isLoading, isError } = useGetWorldQuery("1")

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>error</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.audioCardsContainer}>
        <AudioCard src={data.core.master_url} art={data.core.art} title={data.core.master_url} header={data.core.version} date={data.core.date}/>
      </div>
    </div>
  )
}

export default Core