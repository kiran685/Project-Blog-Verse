import React from 'react'
import { Link } from 'react-router-dom'
const NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border-2 border-black w-full">
            <h1 className=" md:sm text-xl font-xl font-bold">BlogVerse</h1>
            <Link to="/"className="text-gray-600 hover:bg-blue-200 px-5 py-2 rounded-xl cursor-pointer">Home</Link>
        <div  className="flex gap-5">
            <Link to="/signin" className="font-semibold px-5 py-2 text-gray-600">Sign In</Link>
            <Link to="/signup" className=" bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer">Sign Up</Link>
        </div>
        </div>
    )
}
export default NavBar