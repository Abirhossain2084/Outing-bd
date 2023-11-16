import { useLoaderData } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useState } from "react";

const DashboardPackages = () => {
    const lodadedPackages = useLoaderData();
    const [packages, setPackages] = useState(lodadedPackages);
    console.log(packages)
    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/packages/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = packages.filter(pack => pack._id !== _id)
                    setPackages(remaining)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Deleted successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="p-4 mt-4 w-2/3">
            <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">All Packages</h2>
            <div>
                {
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Package</th>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {
                                    packages.map(pack =>
                                        <tr key={pack._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={pack.images} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{pack.title}</div>
                                                        <div className=" text-[#37B3E6]">{pack.duration} Days</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>{pack.location}</h2>
                                            </td>
                                            <td className="text-[#37B3E6] font-semibold">{pack.price} BDT</td>
                                            <th>
                                                <button className="text-2xl hover:text-3xl text-green-600 mr-2"><MdModeEdit></MdModeEdit></button>
                                                <button onClick={() => handleDelete(pack._id)} className="text-2xl hover:text-3xl text-red-600"><MdDelete></MdDelete></button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default DashboardPackages;