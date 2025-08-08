import React from "react";
const Projectslist=[
    {
        id:1,
        title:"Spotify clone",
        description:"A sleek Spotify clone built with React Native, featuring smooth navigation and an intuitive UI.Ideal for showcasing front-end mobile development skills.",
        image:"/Spotify.png",
        github:"sk",
        btn:"View Project",
    },
    {
        id:2,
        title:"Parking App",
        description:"Parking App is a user-friendly React Native frontend with a home screen showing nearby spots and a booking system to reserve spaces.",
        image:"/Parking.png",
        github:"sk",
        btn:"View Project ",
    },
    
]
const Projects =()=>{
    return(
       <section id="projects">
        <div>
             {/*  Header for Projects section */}
            <h1 className="text-[#ffffff] text-center text-2xl font-bold mb-10">Projects</h1>
            <div>
                {/* Projects list */}
                <div className="flex flex-row items-center justify-center w-full">
                    {Projectslist.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-1 rounded-lg shadow-lg w-[400px] h-[266px] ml-4 flex flex-row h-full ">
                            <img src={project.image} alt={project.title} className="w-full h-[266px] object-cover rounded-t-lg" />
                           
                            <div className="p-4">
                                <p className="text-[#ffffff] mb-5">{project.description}</p>
                                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center hover:bg-blue-600 transition duration-300 ">
                                {project.btn} </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
         </section>
    )
}
export default Projects;