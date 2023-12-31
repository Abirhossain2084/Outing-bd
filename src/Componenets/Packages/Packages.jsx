import  { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PackageBanner from "./PackageBanner";
import HomeReview from "../Home/HomeReview";
import { data } from "autoprefixer";


const Packages = () => {
  const packages = useLoaderData([]);
  console.log('packages', packages);

  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  
  // Function to filter rooms by price range
  const filterRooms = (pack) => {
    const price = pack.price;
    return price >= priceRange.min && price <= priceRange.max;
  };

  const [packagesss, setPackagesss] = useState([]);

  useEffect(() => {
    fetch('packagedetails.json')
      .then(response => response.json())
      .then(data => setPackagesss(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(packagesss);

  return (

    <div>
         <PackageBanner></PackageBanner>

          <div className="">


      <h1 className="text-3xl font-bold text-[#164863] mb-8 text-center font-extrabold text-5xl">
       Our Packages:{packages.length}

       
      </h1>

      {/* Price range filter */}
      <div className="flex items-center justify-center mb-4">
        <label className="mr-2 font-bold ">Price Range:</label>
        <input
          type="number"
          placeholder="Min Price"
          className="p-2 border border-gray-300 rounded"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: parseFloat(e.target.value) })}
        />
        <span className="mx-2">to</span>
        <input
          type="number"
          placeholder="Max Price"
          className="p-2 border border-gray-300 rounded"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: parseFloat(e.target.value) })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
        {packages
          .filter(filterRooms) // Filter rooms based on price range
          .map((pack) => (
            <Link to={`/packages/${pack._id}`} key={pack.id}>
              <div
                className="card h-96 bg-base-100 shadow-2xl image-full"
                style={{
                  backgroundImage: `url(${pack.images})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-body text-center">
                  <h2 className="text-white font-bold text-4xl">{pack.title}</h2>
                  <p>{pack.description}</p>
                  <p className="text-lg font-bold">Price: {pack.price} BDT </p>
                  <p className="text-lg font-bold">Duration: {pack.duration}</p>
                  <p className="text-lg font-bold">
                  Location: {pack.location} rooms
                  </p>
                  <p className="text-xl font-bold text-[#DDF2FD]">
                    {/* Customer Review: {pack.reviews.length} */}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
    <HomeReview></HomeReview>
    </div>
    
  );
    
   
   
};

export default Packages;
