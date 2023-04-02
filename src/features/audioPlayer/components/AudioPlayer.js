import { useSelector } from "react-redux"
import { audioPlayerSource } from "../audioPlayerSlice"

function AudioPlayer() {
  const source = useSelector(audioPlayerSource)
  return (
    <div className='audioPlayer'>
        <audio src={source} style={{width: "100%"}} controls autoPlay/>
    </div>
  )
}

export default AudioPlayer