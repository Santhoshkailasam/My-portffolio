import React from "react";
const Hero =()=>{
    return(
        <div className="mx-[100px] flex flex-row" id="home">
            <div>
            <h6 className="text-3xl text-[#BDD749] mt-[190px]">Hello !</h6>
            <h4 className="text-6xl text-[#7FB2FF] mt-[20px]"><span className="text-[#ffffff]"> I'M</span> Kailasam N</h4>
            <h4 className="text-6xl text-[#7FB2FF] mt-[10px]">Software Developer</h4>
            <button className="bg-[#0367FB] text-white p-2 rounded-md mt-[30px]">Download Resume</button>
            </div>
            <div className="">
                <img src="/Ellipse 1.png" alt="Hero Image" className=" mt-[130px] ml-[100px] absolute " />
                 <img src="/heros.png" alt="Hero Image" className=" mt-[70px] ml-[250px]  absolute" />
            </div>
           
        </div>
    )
}
export default Hero;