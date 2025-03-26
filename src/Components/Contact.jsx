import React from "react";
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20 " id="contacts">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center md-12">
          Contact Me
        </h2>
        <br />
        <br />
        <div className="flex flex-col md:flex-row items-center md-space-x-12">
          <div className="flex-1">
          <h3 className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Let's Talk</h3>
            <p>I'm open to discussing web development Projects or partnership opportunities.</p>
<div className="mb-4 mt-8"> 
    <FaEnvelope className="inline-block mr-2 text-green-200"></FaEnvelope>
    <a href="mailto:anshikashukla654@gmail.com" className="hover:underline">
        anshikashukla654@gmail.com </a>
</div>
<div className="mb-4 mt-8 ">
    <FaPhone className="inline-block mr-2 text-green-200"></FaPhone>
    <span>+919305464070</span>
</div>
<div className="mb-4 mt-8">
    <FaMapMarkedAlt className="inline-block mr-2 text-green-200"></FaMapMarkedAlt>
    <span>Kanpur-India</span>
</div>

          </div>
          <div className="flex-1 w-full">
            <form action="" >
              <div>
                <label htmlFor="text" >Your Name</label>
                <input type="text" className="w-full p-2  rounded bg-gray-600 focus-outline-none border border-gray-600
                focus:border-green-400" placeholder="Enter Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="text" className="w-full p-2 rounded bg-gray-600 focus-outline-none border border-gray-600
                focus:border-green-400" placeholder="Enter Your Email" />
              </div>
              <div>
                <label htmlFor="text" className="block mb-2">Your Massage</label>
                <textarea type="text" className="w-full p-2 rounded bg-gray-600 focus-outline-none border border-gray-600
                focus:border-green-400" placeholder="Enter Your Massage" />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full" >Send..</button>
            </form>
          
          </div>
        </div >
      </div>
    </div>
  );
};

export default Contact;
