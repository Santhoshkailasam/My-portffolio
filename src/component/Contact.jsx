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
            <div className=" bg-white flex flex-row  rounded-2xl  mb-10 w-[700px] h-[430px]">
                {/* Get in Touch */}
        {/* Get in Touch */}
<motion.div
  className="bg-gradient-to-br from-teal-400 to-cyan-500 text-white w-[350px] h-auto p-6 rounded-l-2xl shadow-xl"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
<h1 className="text-white text-4xl text-center font-extrabold drop-shadow-lg mb-5">
  GET IN TOUCH
</h1>



  {/* Contact Item */}
  <div className="space-y-5">
    {/* E-mail */}
    <div className="flex items-center gap-3">
      <img src="Mail.png" alt="E-mail" className="w-[28px] h-[28px]" />
      <div>
        <h2 className="text-[18px] font-semibold text-black">E-Mail</h2>
        <a
          href="mailto:Kailasam5107@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Kailasam,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
          className="text-[14px] text-gray-700 hover:text-blue-600 transition"
        >
          click here to send an email
        </a>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3">
      <img src="Whatsapp.png" alt="Phone" className="w-[28px] h-[28px]" />
      <div>
        <h2 className="text-[18px] font-semibold text-black">Phone</h2>
        <a
          href="tel:+919159873818"
          className="text-[14px] text-gray-700 hover:text-blue-600 transition"
        >
         click here for whatsapp
        </a>
      </div>
    </div>

    {/* Location */}
    
    <div className="flex items-center gap-3 mb-5">
      <img src="Location.png" alt="Location" className="w-[28px] h-[28px]" />
      <div>
        <h2 className="text-[18px] font-semibold text-black">Location</h2>
        <p className="text-[14px] text-gray-700">Idayamelur,Sivagangai-630562</p>
      </div>
    </div>
   

    {/* LinkedIn */}
    <div className="flex items-center gap-3">
      <img src="LinkedIn.png" alt="LinkedIn" className="w-[28px] h-[28px]" />
      <div>
        <h2 className="text-[18px] font-semibold text-black">LinkedIn</h2>
        <a
          href="https://www.linkedin.com/in/kailasam-n-8975b3327/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-gray-700 hover:text-blue-600 transition"
        >
         click here to view profile
        </a>
      </div>
    </div>

    {/* GitHub */}
    <div className="flex items-center gap-3">
      <img src="github.svg" alt="GitHub" className="w-[28px] h-[28px]" />
      <div>
        <h2 className="text-[18px] font-semibold text-black">GitHub</h2>
        <a
          href="https://github.com/Santhoshkailasam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-gray-700 hover:text-blue-600 transition"
        >
         click here to view profile
        </a>
      </div>
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