import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import GuideReview from "./GuideReview";

const Guides = () => {
  const guides = useLoaderData([]);
  console.log(guides);

  const [selectedLocation, setSelectedLocation] = useState("all");

  // Function to filter guides by location
  const filterGuidesByLocation = (guide) => {
    if (selectedLocation === "all") {
      return true; // Show all guides if "all" is selected
    } else {
      return guide.location.toLowerCase() === selectedLocation.toLowerCase();
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#164863] mb-8 text-center font-extrabold text-5xl">
        Meet Our Guides
      </h1>

      {/* Location filter */}
      <div className="mb-4">
        <label className="mr-2 font-bold">Filter by Location:</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All Locations</option>
          {Array.from(new Set(guides.map((guide) => guide.location))).map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {guides
          .filter(filterGuidesByLocation)
          .map((guide) => (
            <Link to={`/guides/${guide._id}`} key={guide.id}>
              <div
                key={guide.name}
                className="h-full card card-side glass bg-black shadow-xl p-4 rounded-lg relative"
              >
                <figure>
                  <img
                    className="h-44 w-44 rounded-full"
                    src={guide.image}
                    alt={guide.name}
                  />
                </figure>
                <div className="card-body mt-4 text-white">
                  <h2 className="card-title text-white">{guide.name}</h2>
                  <p>{guide.specialty}</p>
                  <p>{guide.location}</p>
                  

                  <div className="card-actions justify-end">
                    <button className="btn bg-[#37B3E6]">Details</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <GuideReview></GuideReview>
    </div>
  );
};

export default Guides;
