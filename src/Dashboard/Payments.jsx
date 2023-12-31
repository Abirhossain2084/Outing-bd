import { useLoaderData } from "react-router-dom";


const Payments = () => {

  const payments = useLoaderData([]);



  return (
    <div>
      <h2 className="text-4xl font-semibold mt-4 text-[#37B3E6] mb-6">Payment Details</h2>


      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}


            {
              payments.map(payment =>

                <tr key={payment.id}>
                  <th></th>
                  <td>{payment.package?.uname}</td>
                  <td>{payment.package?.email}</td>
                  <td>{payment.tramsactionId}</td>
                  <td>{payment.paidStatus} <button className="btn btn-ghost  bg-green-400">Complete</button></td>

                </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;