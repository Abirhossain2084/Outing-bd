import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddPackages = () => {
  const handleAddPackages = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const location = form.location.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const images = form.image.value;
    const description = form.description.value;

    const newPackage = { title, location, price, duration, description, images };

    fetch("http://localhost:5000/packages", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Package added successfully',
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
        <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">Add Packages</h2>
        <form onSubmit={handleAddPackages} className="space-y-6">
          {/* Row-1 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Package Title</label>
              <input className="input" type="text" name="title" />
            </div>
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Location</label>
              <input className="input" type="text" name="location" />
            </div>
          </div>
          {/* Row-2 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Package Price</label>
              <input className="input" type="text" name="price" />
            </div>
            <div>
              <label className="text-xl font-semibold text-[#37B3E6]">Package Duration</label>
              <input className="input" type="text" name="duration" />
            </div>
          </div>
          {/* Row-3 */}
          <div className="flex justify-start gap-14 items-center">
            <label className="text-xl font-semibold text-[#37B3E6]">Image</label>
            <input className="input" type="text" name="image" />
          </div>
          {/* Row-4 */}
          <div className="flex justify-start gap-2 items-center">
            <label className="text-xl font-semibold text-[#37B3E6]">Description</label>
            <textarea className="input" name="description" rows="4"></textarea>
          </div>
          {/* Row-5 */}
          <div  className="flex justify-center gap-2">
            <button className="btn bg-[#37B3E6] hover:bg-[#4088a5] text-white font-semibold py-2 px-4 rounded">
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackages;
