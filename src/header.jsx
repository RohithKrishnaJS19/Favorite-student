import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation()
    return (
        <div className="bg-white flex gap-14 p-4">
                <Link to="/"><h1 className={`text-lg ${location.pathname === "/"? 
                "border-b-2 border-blue-600"
                            : ""}`}>List of Students</h1></Link>
                <Link to="/favorite"><h1 className={`text-lg ${location.pathname == "/favorite"?
                    "border-b-2 border-blue-600":""
                }`}>Favorite Students</h1></Link>
        </div >
    )
}
export default Header;