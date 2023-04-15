import React from 'react'

function AudioListItem({ header, art, info }) {
  return (
    <div className='listItem'>
        <div>
            <img src={art} alt='' />
        </div>
        <div>
            {header}
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            {info.map((el, idx) => 
            <span style={{marginLeft: "1rem"}}>
                {el} 
            </span>
            )}
        </div>
    </div>
  )
}

export default AudioListItem