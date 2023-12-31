import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddGuides = () => {
  const handleAddGuides = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const location = form.location.value;
    const specialty = form.specialty.value;
    const image = form.image.value;
    const description = form.description.value;

    const newGuide = { name, location, specialty, image, description };
    console.log(newGuide);

    fetch("http://localhost:5000/guides", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGuide),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Guide added successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          form.reset();
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3 p-8 bg-[#e9e9e9] rounded-md shadow-md">
        <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">Add Guides</h2>
        <form onSubmit={handleAddGuides} className="space-y-6">
          {/* Row-1 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Guide Name</label>
              <input className="input" type="text" name="name" />
            </div>
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Location</label>
              <input className="input" type="text" name="location" />
            </div>
          </div>
          {/* Row-2 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Guide Speciality</label>
              <input className="input" type="text" name="specialty" />
            </div>
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Image</label>
              <input className="input" type="text" name="image" />
            </div>
          </div>
          {/* Row-3 */}
          <div className=" flex items-center justify-start
           gap-3">
            <label className="text-xl font-semibold text-[#37B3E6]">Guide Description</label>
            <textarea className="input" name="description" rows="4"></textarea>
          </div>
          {/* Row-5 */}
          <div>
            <button className="btn bg-[#37B3E6] hover:bg-[#4088a5] text-white font-semibold py-2 px-4 rounded">
              Add Guide
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuides;
