import Header from "./header";

function Favorite(props) {
    var suggest = true
    function remove(id) {
        const temp2 = props.favorite.filter(function (item) {
            if (item.id == id) {
                return false
            }
            else {
                return true
            }
        })
        props.setfavorite(temp2)
    }

    if (props.favorite.length == 0) {
        suggest = true
    }
    else {
        suggest = false
    }

    return (
        <div className="flex flex-col items-center mt-20">
            <Header />
            <div className="my-5 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] w-95">
                {suggest ? <h1 className="text-xl p-3">No Favorite Students Added yet</h1> : ""}
                    {
                        props.favorite.map(function (item) {
                            return <div className="flex justify-between items-center">
                
                                    <h1 className="text-xl p-3">{item.name}</h1>
                        
                                    <button onClick={() => { remove(item.id) }}  className="rounded bg-red-500 text-white  p-2 mx-7 my-4">🗑 Remove</button>
                             
                            </div>
                        })
                    }
            </div>
        </div>
    )
}
export default Favorite;