import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const HomePackages = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    fetch("https://outingbd-server.vercel.app/packages")
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, []);

  const slideIn = useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
  });

  return (
    <section className="packages-section my-20">
    <div className="my-20">
                <h2 className="text-[#37B3E6] font-semibold text-center text-6xl">Our Packages</h2>
                <h2 className="text-center mt-4 text-lg text-[#22577A]">Explore our best packages</h2>
            </div>
    <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
    {cards.slice(0, 3).map((card) => (
                    <div key={card._id} className="card bg-base-100 h-[490px] rounded-sm shadow-xl">
                        <figure><img className="w-full h-52" src={card.images} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-[#37B3E6]">{card.title}</h2>
                            <p><span className="font-semibold">Duration:</span> {card.duration} Days</p>
                            <p><span className="font-semibold">Location:</span> {card.location}</p>
                            <p><span className="font-semibold">Price:</span> {card.price} BDT Only</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#37B3E6] hover:bg-[#57a7c7] border-0 text-white">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
    </div>
    <div className="text-center mt-4">
                <Link to='/packages'>
                    <button className="btn bg-[#22577A] hover:bg-[#49849b] border-0 text-white">See All</button>
                </Link>
            </div>
</section>

  );
};

export default HomePackages;
