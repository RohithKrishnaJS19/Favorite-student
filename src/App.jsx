import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listofstudent from "./listofstudent";
import Favorite from "./favorite";
import { useState } from "react";

function App() {
    const [favorite, setfavorite] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listofstudent favorite={favorite} setfavorite={setfavorite}/>}/>
                <Route path="/favorite" element={ <Favorite favorite={favorite} setfavorite={setfavorite}/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;