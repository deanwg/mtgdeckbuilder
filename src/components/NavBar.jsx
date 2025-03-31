import React, { useState } from "react";
import Logo from '../Logo.png';
import { Link, useNavigate } from "react-router-dom";




const NavBar = () => {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    
    const handleSearch = () => {
        navigate("/", {state : { query: query}})
    }
    const handleKeyDown = (e) => {
        if (e.key ==="Enter") {
            handleSearch();
        }
    }

    return (
        <div className="flex flex-row justify-between bg-slate-300 w-full">
            <Link to='/'>
                <img src={Logo} className="w-32 pb-2"/>
            </Link>
            <div className="flex flex-row my-2">
                <input
                    className="border rounded border-gray-500 text-center"
                    type="text"
                    placeholder="Search for card"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="bg-orange-500 p-2 ml-3 rounded-md" onClick={handleSearch}>Search</button>
            </div> 

            <div className="flex flex-row items-center">
                <Link to="/syntax">
                    <button className="bg-orange-500 p-2 rounded-md">Search Syntax</button>
                </Link>
                <Link to="/deckeditor">
                    <button className="bg-orange-500 p-2 ml-3 rounded-md mr-2">Deck Editor</button>
                </Link>
            </div>
        </div>
    )
}


export default NavBar;