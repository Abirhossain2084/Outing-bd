import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'; // Import SweetAlert
import GuideBookingRow from "./GuideBookingRow";


const MyGuideBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);


  console.log(bookings);
  const url = `http://localhost:5000/guidebookings?email=${user.email}`;

  // Fetch user's bookings and update the state
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);






// Function to cancel a booking
const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this booking!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/guidebookings/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your booking has been deleted.', 'success');
            const remainingBookings = bookings.filter((booking) => booking._id !== id);
            setBookings(remainingBookings); // Update the user's booking list
          }
        });
    }
  });
};



  return (

    <div className="container mx-auto">


    {/* guide */}

   <div>
      <h2 className="text-5xl text-center my-20 font-bold text-[#164863]">My guides: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold text-[#164863]">

              <th>Image</th>
              <th>Guide Name</th>            
              <th>User Nmae</th>
              <th>Location</th>
              <th>Do Review</th>
              <th>Delete Guide</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map(booking => <GuideBookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              // handleBookingConfirm={handleBookingConfirm}
              ></GuideBookingRow>)
            }
          </tbody>

        </table>
      </div>
    </div>

    </div>

    
  );
};

export default MyGuideBooking;
