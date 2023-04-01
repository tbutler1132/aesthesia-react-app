import React from 'react'
import { useGetWorldQuery } from '../worldsAPI'
import styles from "../worlds.module.css"
import AudioCard from '../../../app/components/AudioCard'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'

function Core() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetWorldQuery(id)

  if(isLoading) return <div className={styles.worldContainer}><CircularProgress /></div>
  if(isError) return <div>error</div>
  return (
    <div className={styles.worldContainer}>
      <div className={styles.audioCardsContainer}>
        <AudioCard src={data.cores[0].file.asset.url} art={data.cover_art[0].file.asset.url} title={data.title} header={data.cores[0].version} date={"temp"}/>
      </div>
    </div>
  )
}

export default Core