import React from "react";
const Navbar=()=>{
   return (
    <div className="bg-[rgb(34,34,34,0.7)] text-white p-4 fixed top-0 left-0 w-full  p-4 z-50 shadow-md">
        <nav className="flex flex-row mx-[100px] justify-between  ">
        <div className="text-2xl">
            <h1 >Kailasam N</h1>
        </div>
        <div className="items-center">
            <ul className="flex flex-row space-x-4 text-white text-base mt-[5px] ">
                <li><a  href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </nav>
    </div>
   )
}
export default Navbar;