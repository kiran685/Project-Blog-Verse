import React from "react"
import NavBar from "./NavBar"
import {Link} from "react-router-dom" 
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';

const SignUp =()=>{
    return(
        <div className="flex items-center flex-col  gap-5 ">
            <NavBar/>
            <h1 className="text-2xl text-blue-500 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-500 font-semibold">Create your account and start yourBlogging Journey today</p>
            <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center ">
            <div className="w-[90%] flex flex-col gap-2">
                <p className="text-xl text-gray-700 font-semibold" >Full Name</p>
                <input type="text" placeholder="Enter your Full Name"
                className="border-1 border-gray-700
                py-4 px-3 rounded-xl w-full focus:outline-none focus:border-purple-500"
                />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                <p className="text-xl text-gray-700 font-semibold" >Email</p>
                <input type="email" placeholder="Enter your Email"
                className="border-1 border-gray-700
                py-4 px-3 rounded-xl w-full focus:outline-none focus:border-purple-500"
                />
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                <p className="text-xl text-gray-700 font-semibold" >Password</p>
                <div className="relative"><input type="Password" placeholder="Enter your Password"
                className="border-1 border-gray-700
                py-4 px-3 rounded-xl w-full focus:outline-none focus:border-purple-500 gap-3 pl-10"
                /><KeyRound className="absolute top-4 gap-3 ml-3"/></div>
                </div>
                 <div className="w-[90%] flex flex-col gap-2">
                <p className="text-xl text-gray-700 font-semibold" >Confirm Password</p>
                <div className="relative">
                <input type=" Confirm Password" placeholder="Enter Confirm Password"
                className="border-1 border-gray-700
                py-4 px-3 rounded-xl w-full focus:outline-none focus:border-purple-700"
                /><Eye className="absolute top-4 right-5 ml-3" /></div>
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] px-5 py-4 rounded-xl items-center justify-center mt-4">
                    <input type="checkbox" name="" id="" 
                    className="h-5 w-5 gap-3"
                    />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <Link to ="/signup" className="w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold mt-3 text-center flex justify-center gap-5" ><CircleUser /><p>Create Account</p></Link>
                <div className="border-[0.5px] border-gray-500 w-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold mt-2">Already have an Account?</p>
                <Link to ="/signin"className="text-purple-700 font-semibold">Sign In Here </Link>
                <button className="text-gray-700 font-semibold hover:bg-gray-500 py-4 w-[90%] rounded-xl cursor-pointer">Back to Home </button>
            </form>
        </div>
        
    )

}
export default SignUp