

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

// import GuideBookingRow from './GuideBookingRow';
const BookingRow = ({ booking, handleDelete, handleBookingConfirm, handleDateUpdate }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, uname, email,  photo, date, duration, status } = booking;

    // console.log(booking);




    const [gbookings, setgBookings] = useState([]);


    // console.log('guides', gbookings);
    const gurl = `http://localhost:5000/guidebookings?email=${user.email}`;

    // Fetch user's bookings and update the state
    useEffect(() => {
        fetch(gurl)
            .then((res) => res.json())
            .then((data) => setgBookings(data))
            .catch((error) => console.error("Error fetching bookings:", error));
    }, []);

 // Calculate the sum of "gprice" property
const sumOfGPrices = gbookings.reduce((total, booking) => total + parseFloat(booking.gprice), 0);

// console.log('Sum of gprice:', sumOfGPrices);



// bookings data
const [bookings, setBookings] = useState([]);


// console.log("bookings",bookings);
const url = `http://localhost:5000/bookings?email=${user.email}`;

// Fetch user's bookings and update the state
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setBookings(data))
    .catch((error) => console.error("Error fetching bookings:", error));
}, []);

 // Calculate the sum of "gprice" property
 const sumOfPrices = bookings.reduce((total, booking) => total + parseFloat(booking.price), 0);

//  console.log('Sum of price:', sumOfPrices);
 


const price = sumOfPrices+sumOfGPrices;


// console.log(price);

    const handlePay = () => {

        const paymentDetails = {
            name,
            uname,
            email,
            date,
            duration,
            price,
            photo,
            _id
        }


        console.log(paymentDetails);

        fetch("http://localhost:5000/order", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(paymentDetails)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.replace(result.url);
            })
            .catch(error => {
                console.error('Error initiating payment:', error);
            });


    }

    return (




        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>
                {date}
            </td>

            <td>{uname}</td>


            <td>

                <Link to={`/reviews/${_id}`} >

                    <button className='btn text-white h-10 bg-[#427D9D]'>Give Review</button>
                </Link>

            </td>


            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>

            <th>
                <button

                    onClick={handlePay}
                    className="btn btn-warning bg-green-500">
                    PAY
                </button>
            </th>




        </tr>






    );
};

export default BookingRow;
