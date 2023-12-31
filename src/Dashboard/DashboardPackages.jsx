import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useState } from "react";

const DashboardPackages = () => {
  const loadedPackages = useLoaderData();
  const [packages, setPackages] = useState(loadedPackages);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/packages/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = packages.filter((pack) => pack._id !== _id);
          setPackages(remaining);
          Swal.fire({
            title: 'Success!',
            text: 'Deleted successfully',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        }
      });
  };

  return (
    <div className="p-4 mt-4 w-2/3">
      <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">All Packages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#37B3E6] text-white">
              <th className="py-2 px-4">Package</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pack) => (
              <tr key={pack._id} className="border-t border-gray-300">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                      <img className="w-full h-full object-cover" src={pack.images} alt={pack.title} />
                    </div>
                    <div>
                      <div className="font-bold">{pack.title}</div>
                      <div className="text-[#37B3E6]">{pack.duration} Days</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <h2>{pack.location}</h2>
                </td>
                <td className="py-4 px-4 text-[#37B3E6] font-semibold">{pack.price} BDT</td>
                <td className="py-4 px-4">
                  <button className="text-2xl hover:text-3xl text-green-600 mr-2">
                    <MdModeEdit />
                  </button>
                  <button onClick={() => handleDelete(pack._id)} className="text-2xl hover:text-3xl text-red-600">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPackages;
