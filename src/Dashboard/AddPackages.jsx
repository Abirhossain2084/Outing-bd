import Swal from 'sweetalert2/dist/sweetalert2.js'

const AddPackages = () => {
    const handleAddPackages = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const location = form.location.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const images = form.image.value;
        const description = form.description.value;

        const newPackage = { title, location, price, duration, description, images }

        fetch('http://localhost:5000/packages', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
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
        <div className="p-4 mt-4">
            <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">Add Packages</h2>
            <form onSubmit={handleAddPackages} className="border w-2/3 p-4 bg-[#e9e9e9]">
                {/* Row-1 */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="text-3xl">Package Title</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="title" />
                    </div>
                    <div className="w-1/2">
                        <label className="text-3xl">Location</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="location" />
                    </div>
                </div>
                {/* Row-2 */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="text-3xl">Package Price</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="price" />
                    </div>
                    <div className="w-1/2">
                        <label className="text-3xl">Package Duration</label>
                        <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="duration" />
                    </div>
                </div>
                {/* Row-3 */}
                <div>
                    <label className="text-3xl">Image</label>
                    <input className="my-3 rounded-sm border border-[#37B3E6] block h-12 w-full" type="text" name="image" />
                </div>
                {/* Row-4 */}
                <div>
                    <label className="text-3xl">Package Description</label>
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

export default AddPackages;