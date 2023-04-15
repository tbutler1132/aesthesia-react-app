import React from 'react'

function AudioListItem({ header, art, info, type }) {
  return (
    <div className='listItem'>
        <div>
            <img src={art} alt='' />
        </div>
        <div>
            {header}
        </div>
        <div className='listItemInfo' style={{display: 'flex', justifyContent: 'flex-end'}}>
            {info.map((el, idx) => 
            <span style={{marginLeft: "1rem"}}>
                {el} 
            </span>
            )}
        </div>
        {type 
            ?
                <div className='listItemType'>
                    {type}
                </div>
            :
                null
        }
    </div>
  )
}

export default AudioListItem