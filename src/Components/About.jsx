import React from 'react'
import aboutimg from '../assets/anshika.jpeg'
const About = () => {
  return (
    <div className='bg-black text-white py-20 'id='about' >
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center md-12'><u>About Me</u></h2>
        <br />
        <br />
            <div className='flex flex-col md:flex-row items-center md-space-x-12'>
            <img src={aboutimg} alt="" className='h-72 w-px-85 rounded object-cover mb-8 md:mb-0 ' />
            <div className='flex-1'>
            <p className='ml-10 mr-10 text-lg mb-8'> I'm a full-stack Developer with a focus on building modern and resonsive web application.
                 with a strong foundation in both frontend and backend technologies
                ,I strive to create seamless and efficient to user experiences.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12  m-5'>HTML&CSS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white  transform transition-transform duration-300 hover:scale-105 h-2.5 w-10/12 rounded-full'>

                      </div>

                    </div>
                  </div>
                  
                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12  m-5'>React-JS</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white  transform transition-transform duration-300 hover:scale-105 h-2.5 w-8/12 rounded-full'>

                      </div>

                    </div>
                  </div>
                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12  m-5'>JavaScript</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white  transform transition-transform duration-300 hover:scale-105 h-2.5 w-9/12 rounded-full'>

                      </div>

                    </div>
                  </div>
                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12  m-5'>MongoDb</label>
                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                      <div className='bg-gradient-to-r from-green-400 to-blue-500 text-white  transform transition-transform duration-300 hover:scale-105 h-2.5 w-9/12 rounded-full'>

                      </div>

                    </div>
                  </div>

                </div>
                <div className=' mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                      3+
                    </h3>
                    <p>Year Experience</p>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                      40+
                    </h3>
                    <p>Project Completed</p>
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                      10+
                    </h3>
                    <p>Happy Client</p>
                  </div>

                </div>
            </div>
           
               </div>
          
           
        </div>
    </div>
  )
}

export default About