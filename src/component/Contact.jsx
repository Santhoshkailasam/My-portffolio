import React,{ useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
const Contact = () => {
        const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const sendEmail = (e) => {
  e.preventDefault();

  // 1. Send to yourself
  emailjs.send(
    "service_8c49npq",
    "template_urd5hhh", // Your template for YOU
    formData,
    "usOiCoUEmTAQ8kytT"
  ).then(() => {
    console.log("Message sent to owner");

    // 2. Send thank-you email to user
    emailjs.send(
      "service_bk0iwmf",
      "template_c0s1gdo", // A separate template for the thank-you email
      {
        name: formData.name,
        email: formData.email
      },
      "6TG0mH3zA0i8W0GSl"
    ).then(() => {
      console.log("Thank-you email sent to user");
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    });
  }).catch((error) => {
    console.error("Error:", error);
    alert("Failed to send message.");
  });
};

  


    return (
        <div id="contact"className="  text-white flex justify-center items-center flex-col p-10  ">
            {/* contact */}
            <motion.h2 className="text-3xl font-bold text-center mb-10"
             initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once:false, amount: 0.3 }}
            >Contact</motion.h2>
            <div className=" bg-white flex flex-row   mb-10 w-[700px] h-[430px]">
                {/* Get in Touch */}
            <motion.div className="bg-[#BDD749]  w-[350px] h-[430px] "
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}>
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
              <div className="flex flex-row  mt-1 w-[30px] h-[30px] gap-[5px] ml-22">
              <div className="flex flex-row mt-1 gap-3">
            {["LinkedIn.png", "Instagram.png", "FB.png", "Whatsapp.png"].map((icon, idx) => (
              <motion.img
                key={idx}
                src={icon}
                alt=""
                className="w-[30px] h-[30px] cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
              </div>
            </motion.div>
            {/* Form */}
           <motion.form action="#"  onSubmit={sendEmail}  className="flex flex-col justify-center mx-6"
            initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
             viewport={{ once: false, amount: 0.3 }}>
            <label className="text-black mb-1">Name</label>
            <input type="text" value={formData.name} onChange={handleChange} name="name" className="w-[300px] p-2  mb-4 border border-gray-300 rounded text-black placeholder-gray-400" placeholder="Your Name" required />
            <label className="text-black mb-1 ">Email</label>
            <input type="email" value={formData.email}
         onChange={handleChange} name="email"  className="w-[300px]   p-2 mb-4 border border-gray-300 text-black rounded placeholder-gray-400" placeholder="Your Email" required />
            <label className="text-black mb-1">Message</label>
            <textarea  value={formData.message}
         onChange={handleChange} name="message"className="w-[300px]   p-2 mb-4 border placeholder-gray-400 text-black border-gray-300 rounded" placeholder="Your Message" rows="4" required></textarea>
            <motion.button type="submit" className="bg-blue-500 text-white p-2 rounded  hover:bg-blue-600 w-[120px] ml-24 mt-2"
             whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
            transition={{ type: "spring", stiffness: 300 }}>Send Message</motion.button>
           </motion.form>
           </div>
        </div>
    );
}
export default Contact;