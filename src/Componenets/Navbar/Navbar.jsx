import  { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>    
      <li><NavLink to="/packages">Packages</NavLink></li>    
      <li><NavLink to="/guides">Guides</NavLink></li>             
      <li><NavLink to="/bookings">My Cart</NavLink></li>

      <li><NavLink to="/about ">About </NavLink></li>    
      <li><NavLink to="/contact  ">Contact  </NavLink></li>    
      <li><NavLink to="/register">Register</NavLink></li>
      
     
    </>
  );

  return (
    
      <div className="navbar  bg-[#22577A]">
          <div className="navbar-start ">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost text-[#164863] lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className=" text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#164863] rounded-box w-52">
                      {navLinks}
                  </ul>
              </div>
              <Link to='/' ><a className=" ">
                  <img className="w-56  " src={'https://i.ibb.co/sszJ99d/Pics-Art-11-13-12-22-46.png'} alt="" />
                  </a></Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
              <ul className=" text-white font-semibold  text-sm menu menu-horizontal px-1">
                  {navLinks}
              </ul>
          </div>
          <div className="navbar-end   gap-2 ">

              <div className="form-control   ">
                  {user ? (
                      <>

                          <div className="w-10 ml-4 rounded-full bg-black">
                              {user && (
                                  <img src={user.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full" />

                              )}
                          </div>
                          <span className="ml-4 text-white">Welcome, <span className="font-bold ">{user.displayName}</span> </span>
                          {/* <span className="ml-4">Email: {user.email}</span> */}

                          <a

                              onClick={handleLogOut} className="btn btn-sm bg-[#87C342] hover:bg-[#164863] text-white w-30 lg:w-44 ml-4">Sign Out</a>
                      </>
                  ) : (

                      <Link to='/login'><button className="btn  bg-[#87C342] hover:bg-[#164863] text-white">Log in</button></Link>

                  )}

                 
              </div>

             

          </div>
      </div>
  );
};

export default Navbar;
