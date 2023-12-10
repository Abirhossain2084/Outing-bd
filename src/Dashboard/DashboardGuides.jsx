import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'

const DashboardGuides = () => {
    const loadedGuides = useLoaderData();
    const [guides, setGuides] = useState(loadedGuides);
    console.log(guides);
    const handleDelete = _id => {
        console.log(_id)
        fetch(`https://outingbd-server.vercel.app/guides/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = guides.filter(pack => pack._id !== _id)
                    setGuides(remaining)
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
        <div>
            <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">Guides</h2>
            {
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Guide</th>
                                <th>Location</th>
                                <th>Speciality</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                guides.map(guide =>
                                    <tr key={guide._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={guide.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{guide.name}</div>
                                                    <div className=" text-[#37B3E6]">{guide.specialty}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h2>{guide.location}</h2>
                                        </td>
                                        <td className="text-[#37B3E6] font-semibold">{guide.specialty}</td>
                                        <th>
                                            <button className="text-2xl hover:text-3xl text-green-600 mr-2"><MdModeEdit></MdModeEdit></button>
                                            <button onClick={() => handleDelete(guide._id)} className="text-2xl hover:text-3xl text-red-600"><MdDelete></MdDelete></button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default DashboardGuides;