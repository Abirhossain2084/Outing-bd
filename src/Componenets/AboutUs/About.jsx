import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutBanner from "./AboutBanner";

const members = [
  {
    name: "Shariful Islam",
    position: "Frontend developer",
    description: "Professional Frontend depeloper with 3 years of experience",
    image: "https://i.ibb.co/KqLGwHP/sharif.jpg",
  },
  {
    name: "Shahriar Sifat",
    position: "Backend developer",
    description: "Professional Backend depeloper with 3 years of experience",
    image: "https://i.ibb.co/DQhNHtd/sifat.jpg",
  },
  {
    name: "Shihab Udidin",
    position: "Cyber Security Expert",
    description: "Professional Cyber security expert  with 3 years of experience",
    image: "https://i.ibb.co/kGSjxBZ/Whats-App-Image-2023-11-15-at-12-53-14-PM.jpg",
  },
  {
    name: "Abir Hossain",
    position: "Frontend developer",
    description: "Professional Frontend depeloper with 3 years of experience",
    image: "https://i.ibb.co/9tVv9WK/Whats-App-Image-2023-11-15-at-12-17-34-PM.jpg",
  },
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at a time
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 1000, // Autoplay speed in milliseconds (3 seconds in this case)
  };

  return (
  <div>
    <AboutBanner></AboutBanner>
    <div className=" container mx-auto my-20">
        
      <h1 className="text-3xl font-bold my-10 mb-8 text-center text-[#37B3E6] font-extrabold text-5xl">About Us</h1>
     

      <Slider {...settings}>
        {members.map((member, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-200 p-6 rounded shadow-xl glass">
              <img
                className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
                src={member.image}
                alt={member.name}
              />
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  
  );
};

export default About;
