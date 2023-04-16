import { useNavigate } from "react-router-dom"

function AudioListItem({ header, art, info, type, id }) {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/worlds/${id}${type !== "core" ? "/" + type : ""}?title=${header}`)
    }
  return (
    <div onClick={clickHandler} className='listItem'>
        <div>
            <img src={art} alt='' />
        </div>
        <div>
            {header}
        </div>
        {info 
        ? 
        <div className='listItemInfo' style={{display: 'flex', justifyContent: 'flex-end'}}>
            {info.map((el, idx) => 
            <span style={{marginLeft: "1rem"}}>
                {el} 
            </span>
            )}
        </div>
        : null}
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