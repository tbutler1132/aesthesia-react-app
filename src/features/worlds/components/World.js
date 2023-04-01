import SidebarNav from '../../nav/SidebarNav'
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
        <Outlet />
    </div>
  )
}

export default World
