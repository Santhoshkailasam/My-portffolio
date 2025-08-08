import React from "react";
const Contact = () => {
    return (
        <div id="contact" className="  text-white flex justify-center items-center flex-col p-10  ">
            {/* conntact */}
            <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
            <div className=" bg-white flex flex-row   mb-10 w-[700px] h-[430px]">
                {/* Get in Touch */}
            <div className="bg-[#BDD749]  w-[350px] h-[430px] ">
                <h1 className="text-black text-center mt-10 font-bold text-2xl">GET IN TOUCH</h1>
                {/* storyset image */}
                <div className="flex flex-row">
                <img src="/contact.png" alt="contact" className="mt-[50px] w-[170px] h-[170px]" />
                
                <div className="flex flex-col  mt-[70px]">
                    {/* Location */}
                <div className="flex flex-row ">
                    <img src="/Location.png" alt="Location" className="w-[30px] h-[30px] mt-[30px] mb-5 " />
                    <span className="ml-1 text-black" >
                    <h1 className="text-[20px] mt-[20px] font-semibold ">Location</h1>
                    <p className="text-[12px]">Karapakkam,chennai</p>
                    </span>
                </div>
                {/* E-mail */}
                <div className="flex flex-row ">
                    <img src="Mail.png" alt="E-mail"className="w-[30px] h-[30px] mt-3" />
                       <span className="ml-1 text-black">
                    <h1 className="text-[20px] font-semibold">E-Mail</h1>
                    <p className="text-[12px]">Kailasam5107@gmail.com</p>
                </span>
                </div>
                </div>
              </div>
              {/* Follow on social media */}
              <h1 className="text-black ml-18 mt-5">Follow me on Social Media</h1>
              <div className="flex flex-row  mt-4 w-[30px] h-[30px] gap-[5px] ml-25">
              <img src="LinkedIn.png" alt="" />
              <img src="Instagram.png" alt="" />
              <img src="FB.png" alt="" />
              <img src="Whatsapp.png" alt="" />
              <img src="" alt="" />
              </div>
            </div>
            {/* Form */}
           <form action="#" className="flex flex-col justify-center mx-6">
            <label className="text-black mb-1">Name</label>
            <input type="text" className="w-[300px] p-2 mb-4 border border-gray-300 rounded placeholder-gray-400" placeholder="Your Name" required />
            <label className="text-black mb-1">Email</label>
            <input type="email" className="w-[300px]  p-2 mb-4 border border-gray-300 rounded placeholder-gray-400" placeholder="Your Email" required />
            <label className="text-black mb-1">Message</label>
            <textarea className="w-[300px]  p-2 mb-4 border placeholder-gray-400 border-gray-300 rounded" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded  hover:bg-blue-600 w-[120px] ml-24 mt-2">Send Message</button>
           </form>
           </div>
        </div>
    );
}
export default Contact;