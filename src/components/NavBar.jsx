import React from "react";
import Logo from '../Logo.png';




const NavBar = ({query, setQuery, handleSearch, handleKeyDown}) => {

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
                    onBlur={() => setError("")}
                />
            <button className="bg-orange-500 p-2 ml-3 rounded-md"onClick={handleSearch}>Search</button>
            </div> 

            <div className="flex flex-row items-center">
                <button className="border border-black bg-slate-500 rounded-md p-1 ml-2">Seach Syntax</button>
                <button className="border border-black bg-slate-500 rounded-md p-1 ml-2">Deck Editor</button>
            </div>
        </div>
    )
}


export default NavBar;