import { useGetWorldsUpdatesQuery } from "../../worlds/worldsAPI"

function Updates() {
    const { data, isLoading } = useGetWorldsUpdatesQuery(9)
    if(isLoading) return <div>Loading..</div>
    return (
        <div className='mainContent'>{data.map(el => <div key={el._id}>{el._type}</div>)}</div>
    )
}

export default Updates