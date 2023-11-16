
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert library
// import GuideBookingRow from './GuideBookingRow';
const GuideBookingRow = ({ booking, handleDelete, handleBookingConfirm, handleDateUpdate }) => {
    const { _id, guname,gname,glocation, email, gphoto, date, duration, status } = booking;

    console.log(booking);
  

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

            
        </tr>
        



        
       
    );
};

export default GuideBookingRow;
