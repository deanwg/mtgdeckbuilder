import React from "react";



const Toast = ({msg}) => {



return (
    <div className="flex text-center bg-red-600 text-white rounded-lg  text-sm transition-all delay-500 duration-1000 opacity-0">
        {msg}
    </div>
)

}
export default Toast;