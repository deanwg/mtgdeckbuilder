import React from "react";
import Logo from '../Logo.png';
import { Link } from "react-router-dom";




const NavBar = ({setError, query, setQuery, handleSearch, handleKeyDown}) => {

    return (
        <div className="flex flex-row justify-between bg-slate-300 w-full">
            <img src={Logo} className="w-32 pb-2"/>
            <div className="flex flex-row my-2">
                <input
                    className="border rounded border-gray-500 text-center"
                    type="text"
                    placeholder="Search for card"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setError("")}
                />
            <Link to="/">
                <button className="bg-orange-500 p-2 ml-3 rounded-md" onClick={handleSearch}>Search</button>
            </Link>
            </div> 

            <div className="flex flex-row items-center">
                <Link to="/syntax">
                    <button className="bg-orange-500 p-2 rounded-md">Search Syntax</button>
                </Link>
                <button className="bg-orange-500 p-2 ml-3 rounded-md mr-2">Deck Editor</button>
            </div>
        </div>
    )
}


export default NavBar;