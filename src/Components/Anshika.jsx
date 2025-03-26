import React from 'react'
import myimage from '../assets/anshika.jpeg'
import resume from '../assets/Anshika-resume.pdf';

const Anshika = () => {
 

  return (
    <div className='bg-black text-white py-16 text-center'>
        <img src={myimage} alt="mypic" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 ' />
        <h1 className='text-4xl font-bold'>I'm{" "}
        <span className=' text-tranparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>Anshika Shukla</span>
        
        
        ,Full-Stack Developer
        </h1>
      <p className='mt-4 text-lg text-gray-300'>
      Motivated and detail-oriented MCA student with hands-on experience in JavaScript, React.js, Angular.js, Git, MongoDB, and SQL. Passionate about building scalable web applications and improving user experience. Seeking a challenging role to apply my front-end and back-end development skills.

      </p>
      <div className='mt-4 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button>
        <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' ><a href={resume} target='blank'>Resume</a></button>
      </div>
    </div>
  )
}

export default Anshika