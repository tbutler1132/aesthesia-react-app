import { useState } from "react";
import Modal from "@mui/material/Modal"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function VideoModal({ url, thumbnail }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='videoModal'>      
            <VideoCard openModal={handleOpen} header={"Video"}/>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{zIndex: "3000", marginTop: "10vh"}}
            >
                <video style={{height: "90vh", width: "90%"}} controls>
                    <source src={url} type="video/mp4" />
                </video>
            </Modal>
        </div>
  )
}

function VideoCard({ openModal, art, header, date }) {

    const clickHandler = () => {
        openModal(true)
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