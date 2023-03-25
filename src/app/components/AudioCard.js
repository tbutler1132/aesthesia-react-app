import PropTypes from 'prop-types';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useDispatch } from 'react-redux';
import { show, setAudioSource } from '../../features/audioPlayer/audioPlayerSlice';


function AudioCard({ title, art, src, header, date }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(show())
    dispatch(setAudioSource(src))
  }

  return (
    <div className='audioCard'>
      <div onClick={clickHandler} className='audioCardArtContainer'>
        <img src={art} alt=""/>
        <div style={{ position: "relative", bottom: "7rem", width: "fit-content", height: "fit-content", marginLeft: "auto", marginRight: "auto"}}>
            <PlayCircleOutlineIcon  fontSize='large'/>
        </div>
      </div>
      <div className='audioCardInfoContainer'>
        <h3>{header}</h3>
        <h5>{date}</h5>
      </div>
    </div>
  )
}

AudioCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
    header: PropTypes.string,
    art: PropTypes.string
}

export default AudioCard