import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send("service_8c49npq", "template_urd5hhh", formData, "usOiCoUEmTAQ8kytT")
      .then(() => {
        emailjs
          .send(
            "service_bk0iwmf",
            "template_c0s1gdo",
            { name: formData.name, email: formData.email },
            "6TG0mH3zA0i8W0GSl"
          )
          .then(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setIsSending(false);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message.");
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "E-Mail",
      value: "Kailasam5107@gmail.com",
      link: "mailto:Kailasam5107@gmail.com",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone / WhatsApp",
      value: "+91 9159873818",
      link: "tel:+919159873818",
      color: "bg-green-500/10 text-green-400"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Idayamelur, Sivagangai-630562",
      link: null,
      color: "bg-red-500/10 text-red-400"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Kailasam N",
      link: "https://www.linkedin.com/in/kailasam-n-8975b3327/",
      color: "bg-blue-600/10 text-blue-500"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "Santhoshkailasam",
      link: "https://github.com/Santhoshkailasam",
      color: "bg-gray-500/10 text-gray-400"
    }
  ];

  return (
    <section id="contact" className="pt-8 pb-16 px-4 md:px-10 relative overflow-hidden bg-black/30">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0367FB]/5 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4D613]/10 border border-[#C4D613]/20 text-[#C4D613] text-xs font-bold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} />
            Let's Collaborate
          </motion.div>
          <motion.h2
            className="text-white text-5xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Get In <span className="text-[#C4D613]">Touch</span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-20 bg-[#0367FB] mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Info Side */}
          <motion.div 
            className="md:col-span-1 lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="bg-gray-900/60 p-6 sm:p-8 rounded-3xl border border-white/5 h-full space-y-6 sm:space-y-8 will-change-transform">
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Connect with me</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Feel free to reach out for collaborations or just a friendly hello!</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link?.startsWith('http') ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C4D613]/30 transition-all group ${!info.link && 'cursor-default'} will-change-transform overflow-hidden`}
                    whileHover={info.link ? { x: 10, backgroundColor: "rgba(255,255,255,0.08)" } : {}}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{info.label}</p>
                      <p className="text-white font-medium text-sm sm:text-base group-hover:text-[#C4D613] transition-colors truncate">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="md:col-span-1 lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <form 
              onSubmit={sendEmail}
              className="bg-gray-900/60 p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/5 h-full flex flex-col justify-between will-change-transform"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-[#0367FB]/10 text-[#0367FB]">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-white text-2xl font-bold">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm font-medium ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C4D613]/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm font-medium ml-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C4D613]/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#C4D613]/50 focus:bg-white/10 transition-all resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                className="mt-8 group relative flex items-center justify-center gap-3 bg-[#0367FB] text-white py-4 px-8 rounded-2xl font-bold overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {isSending ? (
                   <span className="flex items-center gap-2">
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     Sending...
                   </span>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

