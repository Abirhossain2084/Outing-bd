
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const GuideDetails = () => {
  const guide = useLoaderData();
  console.log(guide);
  const { user } = useContext(AuthContext);

  
  const handleConfirmBooking = async () => {
    try {
      // Create a cartProduct object with the data you want to save
      const guideDetails = {
        guname: user.displayName,
        email: user.email,
        gname: guide.name,
        glocation:guide.location,
        gspeciality: guide.specialty,
        gphoto: guide.image,
       
      };

      console.log('guidessss', guideDetails);

      // Send a POST request to your server to add the product to the cart
      const response = await fetch('https://outingbd-server.vercel.app/guidebookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guideDetails), // Send the cartProduct data in the request body
      });

      if (response.ok) {
        // The item was added to the cart successfully
        Swal.fire({
          title: 'Added!',
          text: 'Item has been added to My guide list',
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
    <div className="container mx-auto mt-10 p-6 bg-gray-400 my-20 rounded-lg shadow-xl">
     <h1 className="text-center my-10 text-4xl font-bold">Guide details</h1>
     
      <div className="flex justify-center items-center gap-8">
        {/* Guide Image and Details */}
        <div className="text-center w-1/2 glass rounded-xl">
          <h1 className="text-3xl font-bold mb-2">{guide.name}</h1>
          <img
            className="h-44 w-44 rounded-lg mx-auto"
            src={guide.image}
            alt={guide.name}
          />
          <p className="text-white font-bold">{guide.specialty}</p>
          <p className="text-gray-600">{guide.location}</p>
          <p className="text-gray-700">{guide.description}</p>
        </div>

        {/* Security Image (NID) */}
        <div className="text-center grid justify-center w-1/2 glass rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Security Image (NID)</h2>
          <img
            className="w-80 rounded-lg"
            src={guide.nid} 
            // alt={`${guide.name}'s NID`}
          />
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link to="">
              <button
                onClick={handleConfirmBooking}
                className="btn text-white bg-[#164863] hover-bg-[#427D9D]"
              >
                Book Guide
              </button>
            </Link>
      </div>
      
    </div>
  );
};

export default GuideDetails;
