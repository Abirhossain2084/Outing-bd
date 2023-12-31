import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// import bgImage from "./path/to/background-image.jpg";

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m7ddppc', 'template_0gbr8me', form.current, 'qPZX1bjYVv3Cfre6u')
      .then((result) => {
          console.log(result.text );

          Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Your email has been sent successfully!',
          });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'Error',
            title: 'Something went Wrong!',
            text: 'Your email has been not Sent!',
          });
      });
  };

  return (
    <div
    style={{ backgroundImage: `url(${'https://i.ibb.co/txh2G1W/mamun-srizon-qay3l-NDSHzc-unsplash.jpg'})`, backgroundSize: "cover", backgroundPosition: "center",opacity:0.9 }}
    className="pt-20 pb-20 px-10 lg:px-20 relative flex flex-col items-center justify-center h-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Booking Info */}
      <div className="bg-transparent text-secondary-color border-2 rounded-lg p-8">
        <h2 className="text-4xl text-primary-color font-bold mb-4 text-[#37B3E6]">Booking Information</h2>
        <p className="mb-4 text-white">
          "Booking Info: Your comprehensive guide to a remarkable travel experience. Uncover destination essentials, travel dates, and must-know tips—all conveniently laid out for your journey. With our insights at your side, embrace each adventure with confidence and anticipation. Your perfect trip starts here."
        </p>
        <ul className="list-disc pl-6 font-bold text-xl text-[#87C342]">
          <li>Destination: Choose destination</li>
          <li>Date: Select date</li>
          <li>Duration: How long you will stay</li>
        </ul>

        <div className="text-white mt-10">
          <p className="text-white">
            "Ready to embark on your dream adventure? Secure your spot now and be part of an unforgettable journey. Choose from our carefully curated destinations, handpicked experiences, and personalized itineraries. Your next travel story begins with us. Book your spot today and create memories that will last a lifetime."
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-transparent border-2 rounded-lg p-8">
        <h2 className="text-4xl text-primary-color font-bold mb-4 text-[#37B3E6]">Contact Us</h2>
        <form 
        ref={form}
       onSubmit={sendEmail}
        className="text-white">
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg bg-transparent"
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg bg-transparent"
            />
          </div>
        </div>

        <div className="w-1/2 pr-2">
          <label htmlFor="dateTime" className="block font-medium">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            className="w-full px-4 py-2 border rounded-lg bg-transparent"
          />
        </div>

        <div className="grid justify-center form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-white text-l">Pick the Destination </span>
          </label>
          <select className="select select-bordered border-white bg-transparent">
            <option className="text-black" disabled selected>
              Pick one
            </option>
            <option className="text-black">Cox's Bazar</option>
            <option className="text-black">Sylhet</option>
            <option className="text-black">Sajek</option>
            <option className="text-black">Saint-martin</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded-lg h-32 bg-transparent"
          ></textarea>
        </div>

        <div className="grid justify-center">
          <button
            type="submit"
            className="h-14 w-56 bg-[#87C342] hover:bg-[#37B3E6] text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
