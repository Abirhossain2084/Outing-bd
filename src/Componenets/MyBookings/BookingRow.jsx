
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert library
// import GuideBookingRow from './GuideBookingRow';
const BookingRow = ({ booking, handleDelete, handleBookingConfirm, handleDateUpdate }) => {
    const { _id, name,uname, email, photo, date, duration, status } = booking;

    console.log(booking);
  

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

            
        </tr>
        



        
       
    );
};

export default BookingRow;
