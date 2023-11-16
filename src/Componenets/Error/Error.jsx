
import { Link } from 'react-router-dom';

const Error = () => {

    const containerStyle = {
        backgroundImage: 'url("https://i.ibb.co/Kbghtmk/6325254.jpg")', // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Text color
    };

    return (
        <div style={containerStyle}>
            <h1 className="text-6xl text-black mb-40 font-bold"> Page Not Found</h1>




            <Link to='/'><button className='btn btn-warning'>Go Home</button></Link>
        </div>
    );
};

export default Error;