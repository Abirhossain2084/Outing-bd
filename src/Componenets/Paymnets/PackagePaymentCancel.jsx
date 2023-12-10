
import { useParams } from 'react-router-dom';

const PackagePaymentCancel = () => {
    const {tranId} = useParams();
    return (
        <div>
            <h1>Payment Canceld </h1>
            <h1>Transaction id is: {tranId}</h1>
        </div>
    );
};

export default PackagePaymentCancel;