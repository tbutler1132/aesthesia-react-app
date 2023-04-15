import React from 'react'
import { useGetWorldQuery } from '../worldsAPI'
import styles from "../worlds.module.css"
import AudioCard from '../../../app/components/AudioCard'
import AudioListItem from '../../../app/components/AudioListItem'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import WorldHeader from './WorldHeader'
import { theme } from '../../../app/themeSlice'
import { useSelector } from 'react-redux'


function Core() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetWorldQuery(id)
  const currentTheme = useSelector(theme)

  if(isError) return <div className={styles.worldContainer}>Something Went wrong</div>
  return (
    <div data-mode={currentTheme} className={styles.worldContainer}>
      <WorldHeader headerText={"The core is the basic concept for each world and will eventually develop into the final song"}/>
      {isLoading 
        ? 
          <CircularProgress /> 
        : 
          <div className="verticalCardsContainer">
            <AudioListItem info={["Version: " + data.cores[0].version, data.cores[0]._createdAt]} art={data.cover_art[0].file.asset.url} header={data.title}/>
            <AudioListItem info={["Version: " + data.cores[0].version, data.cores[0]._createdAt]} art={data.cover_art[0].file.asset.url} header={data.title}/>
          </div>
      }
    </div>
  )
}

export default Core