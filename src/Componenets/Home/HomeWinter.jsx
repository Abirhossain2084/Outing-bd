

const HomeWinter = () => {
    return (

        <section className="p-4">
             <div className="relative winter-banner h-[400px] group overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-cover bg-center group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'url("https://i.ibb.co/f2b5bJn/6068183.jpg")', opacity: '0.7' }}></div>
            <div className="relative mt-24 z-10 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="text-4xl text-black font-bold ">Winter Special Offer!</h2>
                <p className="text-lg mb-6 text-black">Escape the cold with our exclusive winter packages. Limited-time offer!</p>
                <button className="btn bg-[#87C342] border-0 text-white">
                    Details
                </button>
            </div>
        </div>

        </section>
       

    );
};

export default HomeWinter;
