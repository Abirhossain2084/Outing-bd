
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert library
// import GuideBookingRow from './GuideBookingRow';
const GuideBookingRow = ({ gbooking, handleDelete, handleBookingConfirm, handleDateUpdate }) => {
    const { _id, guname, gname, glocation, gprice, email, gphoto, date, duration, status } = gbooking;

    console.log(gbooking);



    const handlePay = () => {

        const paymentDetails = {
            gname,
            guname,
            email,
            date,
            duration,
            gprice,
            gphoto,
            _id
        }


        console.log(paymentDetails);

        fetch("http://localhost:5000/guideorder", {
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
                        {gphoto && <img src={gphoto} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>{gname}</td>


            <td>{guname}</td>
            <td>{glocation}</td>


            <td>

                <Link to={`/guidereviews/${_id}`} >

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

export default GuideBookingRow;
