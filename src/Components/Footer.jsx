import React from "react";
import { FaGithub, FaInstagram, FaYoutube,FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer  className="bg-black text-white py-8">
      <div className="  container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md-space-x-12">
          <div className="flex 1 mb-4 md:mb-0">
            <h3  className='text-2xl font-bold text-white'>Anshika</h3> 
           
            <p  className="  mr-0 text-gray-400 mt-8 flex justify-between text-center">
              Full-Stack Developer based in India , specilization web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flext items-center justify-center">
              <input  className=" m-4 w-full p-2 rounded-xl- bg-gray-800 border border-gray-600
                focus:border-green-400  focus-outline-none" type="email" placeholder="Enter your Email" /> 
                <button className="  m-8 bg-gradient-to-r from-green-400 to-blue-500 text-white   transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-xl " >Suscribe</button>
             
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400">
            &copy;{new Date().getFullYear()} 
          </p>
          <div className="flex  space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook/></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaGithub/></a>
            <a href="#"className="text-gray-400 hover:text-white"><FaInstagram/></a>
            <a href="#"className="text-gray-400 hover:text-white"><FaYoutube/></a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#"className="text-gray-400 hover:text-white">
              Terms of Services.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
