import React from "react";
import Logo from '../Logo.png';




const NavBar = () => {

    return (
        <div className="flex flex-row justify-between bg-slate-300 w-full text-orange-200">
            <img src={Logo} className="w-32 pb-2"/>

            <div className="flex flex-row items-center">
                <button className="border border-black bg-slate-500 rounded-md p-1 ml-2">Seach Syntax</button>
                <button className="border border-black bg-slate-500 rounded-md p-1 ml-2">Deck Editor</button>

            </div>
        </div>
    )
}


export default NavBar;