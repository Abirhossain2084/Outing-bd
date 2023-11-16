import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const PackageDetails = () => {
  const packages = useLoaderData();
  console.log(packages);
  const [bookingDate, setBookingDate] = useState(new Date());
  const [bookingDuration, setBookingDuration] = useState(1); // Default duration is 1 day
  const { user } = useContext(AuthContext);

  const handleConfirmBooking = async () => {
    try {
      // Create a cartProduct object with the data you want to save
      const packageDetails = {
        uname: user.displayName,
        email: user.email,
        name: packages.title,
        price: packages.price,
        rating: packages.availability,
        photo: packages.images,
        date: bookingDate.toDateString(),
        duration: bookingDuration,
      };

      console.log('pack det', packageDetails);

      // Send a POST request to your server to add the product to the cart
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(packageDetails), // Send the cartProduct data in the request body
      });

      if (response.ok) {
        // The item was added to the cart successfully
        Swal.fire({
          title: 'Added!',
          text: 'Item has been added to My Booking list',
          icon: 'success',
          confirmButtonText: 'Okay!',
        });
      } else {
        // There was an error adding the item to the cart
        Swal.fire({
          title: 'Something is Wrong',
          text: 'Try again',
          icon: 'error',
          confirmButtonText: 'Okay!',
        });
      }
    } catch (error) {
      console.error('Error adding item to list:', error);
    }
  };

  return (
    <div className="my-20">
      <h1 className="text-center  font-bold text-6xl my-10">{packages.name} Details of {packages.title}</h1>
      <div className="card glass bg-[#DDF2FD] shadow-xl m-4">
        <div className="flex justify-center  gap-6 m-4">
          {/* {packages.images.map((image, index) => (
            <figure key={index} className="w-1/2">
              <img className="rounded-lg h-28 lg:h-72 w-full" src={image} alt={`Room ${index + 1}`} />
            </figure>
          ))} */}
          <img 
          className='h-96 rounded-lg'
          src={packages.images} alt="" />
        </div>
        <div className="card-body text-center">
          <h2 className="text-4xl font-bold">{packages.name}</h2>
          <p className="text-xl">{packages.description}</p>
          <p className="font-bold text-lg">Price : {packages.price} BDT</p>
          <p className="font-bold text-lg">Duration: {packages.duration}</p>
         
          {packages.specialOffers && (
            <p className="font-bold text-[#f3a648]">Special Offers: {packages.specialOffers}</p>
          )}

          {/* Date Picker */}
          <div className="my-4 space-y-3 ">
            <h2 className="font-bold text-lg">Select Booking Date</h2>
            <DatePicker selected={bookingDate} onChange={(date) => setBookingDate(date)} />
            <div className="grid justify-center items-center">
              <label>Select Booking Duration (in days):</label>
              <input
                className=""
                type="number"
                value={bookingDuration}
                onChange={(e) => setBookingDuration(parseInt(e.target.value))}
              />
            </div>
          </div>
          <Link to="/bookings">
              <button
                onClick={handleConfirmBooking}
                className="btn text-white bg-[#164863] hover-bg-[#427D9D]"
              >
                Confirm Booking
              </button>
            </Link>
          {/* Booking Summary */}
          
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
