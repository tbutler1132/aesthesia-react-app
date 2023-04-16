import { useGetWorldsUpdatesQuery } from "../../worlds/worldsAPI"
import AudioListItem from "../../../app/components/AudioListItem"
import { formatDate } from "../../../util"

function Updates() {
    const { data, isLoading } = useGetWorldsUpdatesQuery(9)

    if(isLoading) return <div>Loading..</div>
    return (
        <div className='mainContent'>
            <div className="listItemContainer">
                {data.map(el => 
                    <AudioListItem id={el.world._id} info={[formatDate(el._createdAt)]} art={el.world.cover_art[0].file.asset.url} key={el._id} header={el.world.title} type={el._type} />    
                )}
            </div>
        </div>
    )
}

export default Updates