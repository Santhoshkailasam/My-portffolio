import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Star } from "lucide-react";

const certificates = [
    {
    id: 1,
    title: "Paper Presentation",
    issuer: "Academic Conference",
    date: "2026",
    image: "/Paper certification.jpeg",
    link: "/Paper certification.jpeg",
    skills: ["Research", "Public Speaking", "Documentation", "Technical Writing"],
    isPdf: false
  },
  {
    id: 2,
    title: "React JS Development",
    issuer: "Industry Certified",
    date: "2024",
    image: "/react.jpg",
    link: "/react js certificate.pdf",
    skills: ["React.js", "Hooks", "State Management", "Frontend Architecture"],
    isPdf: true
  },
  {
    id: 3,
    title: "Python Programming",
    issuer: "Technical Certification",
    date: "2024",
    image: "/python.jpg",
    link: "/python certificate.pdf",
    skills: ["Python", "Data Structures", "Algorithms", "Backend Logic"],
    isPdf: true
  },
  {
    id: 4,
    title: "College Hackathon",
    issuer: "University Innovation Hub",
    date: "2024",
    image: "/certificates.jpg",
    link: "/certificates.jpg",
    skills: ["Problem Solving", "Rapid Prototyping", "Team Collaboration"],
    isPdf: false
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-10 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.h2
            className="text-white text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Professional <span className="text-[#C4D613]">Certifications</span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-[#0367FB] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Continuous learning and skill validation through industry-recognized programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 border border-white/10 rounded-3xl p-6 hover:border-[#C4D613]/50 transition-all duration-300 backdrop-blur-xl group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-800 flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                   <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#C4D613] text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                   >
                     View Full <ExternalLink size={18} />
                   </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-bold text-xl group-hover:text-[#C4D613] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[#0367FB] font-medium text-sm mt-1 flex items-center gap-2">
                      <ShieldCheck size={14} /> {cert.issuer}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
            <Star className="text-[#C4D613] fill-[#C4D613]" size={20} />
            <p className="text-gray-300 text-sm italic">
              "Commitment to excellence through lifelong learning."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
