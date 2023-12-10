import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    console.log(reviews);

    useEffect(() => {
        fetch('https://outingbd-server.vercel.app/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        <div className="bg-white p-4">

            <div className="mb-20">
                <h2 className="text-[#37B3E6] font-semibold text-center text-6xl">Customer Reviews</h2>
                <h2 className="text-center mt-4 text-lg text-[#22577A]">See What our authentic cutomer customer says</h2>
            </div>

            <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                {reviews.map((review) => (
                    <div key={review.id} className="card h-96 bg-base-100 shadow-xl image-full">
                        <figure>
                            <img src={review.bookingPhoto} alt="photo" />
                        </figure>
                        <div className="card-body">
                            <div className='flex gap-4 items-center'>

                                <figure>

                                    <img src={review.userimage} alt="User's Photo" className="h-24 w-20 rounded-full" />
                                </figure>
                                <div>
                                    <h2 className="card-title text-white text-4xl text-center">{review.userNmae}</h2>
                                    <h2 className="card-title text-white text-xl text-center">{review.userEmail}</h2>
                                </div>

                            </div>


                            <p className='text-3xl font-bold text-white'>Place Name: {review.bookingName}</p>
                            <p className='text-2xl font-bold text-white'> " {review.reviewText}"</p>
                            <p className='text-xl font-bold text-white'>Rating: {review.rating} star</p>
                            <p className='text-xl font-bold text-white'>Date: {review.date}</p>
                            <p className='text-xl font-bold text-white' >Time: {review.time}</p>



                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeReview;
