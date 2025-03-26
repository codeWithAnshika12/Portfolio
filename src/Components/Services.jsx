import React from "react";
const services = [
  {
    id: 1,
    title: "web design",
    description: "craeting visually appealing and user friendly web designs.",
  },
  {
    id: 2,
    title: "Fontend Develpment",
    description: "Building responsive and interactive user interface.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and Database.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Cmbining both Frontend and Backend Development Skill .",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your Business and Companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your Business with our Digital Marketing Team.",
  },
];
const Services = () => {
  return (
    <div className="bg-black text-white py-20 " id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center md-12">
           My Services

        </h2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((services) => (
            <div
              key={services.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform  transition-transform duration-300 hover:scale-105 "
            >
              <div className=" inset-inline-end  text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {services.id}
                
              </div>
              <h3 className=" flex-l text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {services.title}
              </h3>
              <p className="mt-2 text-gray-300">{services.description}</p>
              <a
                href="#"
                className=" mt-4 inline-block hover:text-blue-500 text-green-400"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
