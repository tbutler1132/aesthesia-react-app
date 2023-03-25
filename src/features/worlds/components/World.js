import SidebarNav from '../../nav/SidebarNav'
import WorldHeader from './WorldHeader'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { displayAudioPlayer } from '../../audioPlayer/audioPlayerSlice'
import AudioPlayer from '../../audioPlayer/components/AudioPlayer'

function World() {
  const audioPlayerVisible = useSelector(displayAudioPlayer)
  return (
    <div>
        <SidebarNav />
        {audioPlayerVisible ? 
          <AudioPlayer />
        : null}
        <WorldHeader />
        <Outlet />
    </div>
  )
}

export default World
