import { useParams } from "react-router-dom";


const PackagePayment = () => {
    const {tranId} = useParams();
    return (
        <div>
            <h1>Payment sucess</h1>
            <h1>Transaction id is: {tranId}</h1>
        </div>
    );
};

export default PackagePayment;