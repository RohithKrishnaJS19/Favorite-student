import { useState } from "react";
import Header from "./header";

function Listofstudent({ favorite, setfavorite }) {

    const [name, setname] = useState([
        {
            id: 1,
            name: "Rohith krishna"
        },
        {
            id: 2,
            name: "Deepika"
        },
        {
            id: 3,
            name: "Sunitha"
        },
        {
            id: 4,
            name: "Jaya Sankar"
        }])


    function Add(id) {
        const temp = name.find(function (item) {
            if (item.id == id) {
                return true
            }
            else {
                return false
            }
        })
        setfavorite([...favorite, temp])
    }
    const [einput,seteinput]=useState()
    function input(event)
    {
        seteinput(event.target.value)
    }

    function add()
    {
        setname([...name,{id:name.length+1,name:einput}])
    }
    return (
        <div className="flex flex-col items-center mt-20">
            <div>
                <input className="border p-2" onChange={input}></input><button onClick={add} className="bg-black text-white p-2 border border-black">Add</button>
            </div>
            <Header />
            <div className="my-5 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] w-94">
                    {
                        name.map(function (item,index) {

                            const isAdd = favorite.some(function(fav)
                        {
                            if(item.id==fav.id)
                            {
                                return true
                            }
                            else{
                                return false
                            }
                        })
                            return <div className="flex justify-between items-center">
                               
                                    <h1 className="text-xl p-3 pl-4">{index + 1}. {item.name}</h1>
                                
                                    <button disabled={isAdd} onClick={() => { Add(item.id) }} className="rounded bg-blue-600 text-white  p-2 mx-5 my-4">★ Add to Favorite</button>
                               
                            </div>
                        })
                    }
            </div>
        </div>

    )
}
export default Listofstudent;