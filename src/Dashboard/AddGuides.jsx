import Swal from 'sweetalert2/dist/sweetalert2.js'
const AddGuides = () => {
    const handleAddGuides = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const specialty = form.specialty.value;
        const image = form.image.value;
        const description = form.description.value;

        const newGuide = { name, location, specialty, image, description }
        console.log(newGuide)

        fetch('http://localhost:5000/guides', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGuide)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Package added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    form.reset();
                }
            })

    }
    return (
        <div>
            <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">Add Packages</h2>
            <form onSubmit={handleAddGuides} className="border w-2/3 p-4 bg-[#e9e9e9]">
                {/* Row-1 */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="text-3xl">Guide Name</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="name" />
                    </div>
                    <div className="w-1/2">
                        <label className="text-3xl">Location</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="location" />
                    </div>
                </div>
                {/* Row-2 */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="text-3xl">Guide Speciality</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="specialty" />
                    </div>
                    <div className="w-1/2">
                        <label className="text-3xl">Image</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="image" />
                    </div>
                </div>
                {/* Row-3 */}
                <div>
                    <label className="text-3xl">Guide Description</label>
                    <input className="my-3 rounded-sm border border-[#37B3E6] block h-24 w-full" type="text" name="description" />
                </div>
                {/* Row-5 */}
                <div>
                    <input className=" px-3 rounded-sm bg-[#37B3E6] hover:bg-[#4088a5] py-2 mt-4 text-white font-semibold uppercase" type="submit" value="Add Package" />
                </div>
            </form>
        </div>
    );
};

export default AddGuides;