import { useState } from "react";
import Modal from "@mui/material/Modal"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useDispatch } from 'react-redux';
import { hide } from '../../features/audioPlayer/audioPlayerSlice';
import Button from '@mui/material/Button'

const style = {
    marginTop: '5rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: "space-around",
  };

function VideoModal({ url, thumbnail, header }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='videoModal'>      
            <VideoCard openModal={handleOpen} header={header}/>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{zIndex: "3000"}}
            >
                <div style={style}>
                    <div id="modalCloseButtonContainer">
                        <Button onClick={handleClose} variant='contained' color='error'>Close</Button>
                    </div>
                    <video style={{height: "85vh"}} controls>
                        <source src={url} type="video/mp4" />
                    </video>
                </div>
            </Modal>
        </div>
  )
}

function VideoCard({ openModal, art, header, date }) {
    const dispatch = useDispatch();

    const clickHandler = () => {
        openModal(true)
        dispatch(hide())
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

export default VideoModal