import SidebarNav from '../../nav/SidebarNav'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { displayAudioPlayer } from '../../audioPlayer/audioPlayerSlice'
import AudioPlayer from '../../audioPlayer/components/AudioPlayer'

function World() {
  const audioPlayerVisible = useSelector(displayAudioPlayer)
  return (
    <div className='mainContent'>
      <div className='mainContentSideNavCol1'>
        <SidebarNav />
      </div>
        {audioPlayerVisible ? 
          <AudioPlayer />
        : null}
        <div className='mainContentSideNavCol2'>
          <Outlet />
        </div>
    </div>
  )
}

export default World
