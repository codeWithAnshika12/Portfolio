import React from 'react'
import Quize from'../assets/quize.webp';
import Weather from '../assets/Weather.jpg';
import Portfolio from '../assets/portfolio.webp';

const project=[
    {
        id:1,
        name:'Weather Application',
        technologies:'React js,HTML,CSS',
        image:Weather,
        github:"https://github.com/codeWithAnshika12",
    },
    {
        id:2,
        name:'Quize Application',
        technologies:'React js,HTML,CSS',
        image:Quize,
        github:"https://github.com/codeWithAnshika12",
    }, {
        id:3,
        name:'Portfolio',
        technologies:'React js,Tailwind css',
        image:Portfolio,
        github:"https://github.com/codeWithAnshika12",
    },

]

const Projects = () => {
  return (
    <div className="bg-black text-white py-20 " id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center md-12">My Projects
        </h2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.map(project=>(
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform
                transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt={project.name} className='rounded-lg mb-4
                     w-full h-48 object-cover'/>
                    <h3 className='mb-2 text-2xl font-bold'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} target='blank' rel='noopener noreferrer' className='inline-block bg-gradient-to-r from-green-400
                  to-blue-500 text white px-4 py-2 rounded-full  '>GitHub</a>
                </div>
            ))}
           
        </div>
        </div>
        </div>

        
        
        
      
  )
}

export default Projects