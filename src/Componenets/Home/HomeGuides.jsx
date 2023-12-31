import  { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Custom Next Arrow component
const CustomNextArrow = (props) => (
    <div {...props}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
  
  // Custom Previous Arrow component
  const CustomPrevArrow = (props) => (
    <div {...props}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );

  
const HomeGuides = () => {
    const [guides, setGuides] = useState([]);
    const [showDescription, setShowDescription] = useState(false);


    useEffect(() => {
        // Fetch guides data here
        fetch('guide.json')
            .then((response) => response.json())
            .then((json) => setGuides(json));
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    

    return (
        <section className="guides-section my-32 p-4">
       <div className="mb-20 ">
                <h2 className="text-[#37B3E6] font-semibold text-center text-6xl">Our Expreienced Guides</h2>
                <h2 className="text-center mt-4 text-lg text-[#22577A]">Best in the business</h2>
            </div>
        
        <Slider {...settings} className="gap-4">
            {guides.map((guide) => (
                <div
                    key={guide.id}
                    className="h-full card card-side glass bg-[#b7defd] shadow-xl p-4 rounded-lg gap-4 relative"
                >
                    <figure>
                        <img
                            className="h-44 w-44 rounded-full"
                            src={guide.image}
                            alt="guide"
                        />
                    </figure>
                    <div className="card-body mt-4 text-black">
                        <h2 className="card-title text-black">{guide.name}</h2>
                        <p>{guide.location}</p>
                        <p>{guide.specialty}</p>
                        {showDescription && <p>{guide.description}</p>}
                        <div className="card-actions justify-end">
                            <button
                                onClick={() => setShowDescription(!showDescription)}
                                className="btn bg-[#37B3E6] border-0 text-white"
                            >
                                {showDescription ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>

        <div className="text-center mt-20">
            <button className="btn bg-[#87C342] border-0 text-white">See All</button>
        </div>
    </section>
    );
};

export default HomeGuides;
