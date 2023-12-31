import { useParams } from "react-router-dom";


const PackagePayment = () => {
    const {tranId} = useParams();
    return (
        <section className="flex justify-center my-20">
              <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://i.ibb.co/94whpHj/icons8-success-500.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">Payment Success</h2>
          <p className="font-xl ">Transaction ID: {tranId}</p>
          <div className="card-actions">
           
          </div>
        </div>
      </div>
        </section>
      
    );
};

export default PackagePayment;