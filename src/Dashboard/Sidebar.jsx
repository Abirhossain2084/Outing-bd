import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 bg-[#22577A] min-h-screen h-full pl-4">
            <img className="w-40 pt-10" src={'https://i.ibb.co/sszJ99d/Pics-Art-11-13-12-22-46.png'} alt="logo" />
           <hr className="my-20" />
           
            <div className="flex flex-col gap-4 mt-4 text-xl text-[#ececec]">
                <NavLink to='/dashboard' className="hover:text-[#ffffff] hover:text-[22px]">Packages</NavLink>
                <NavLink to='/dashboard/add_packages' className="hover:text-[#ffffff] hover:text-[22px]">Add Package</NavLink>
                <NavLink to='/dashboard/guides' className="hover:text-[#ffffff] hover:text-[22px]">Guides</NavLink>
                <NavLink to={'/dashboard/add_guides'} className="hover:text-[#ffffff] hover:text-[22px]">Add Guides</NavLink>
                <NavLink to={'/dashboard/payments'} className="hover:text-[#ffffff] hover:text-[22px]">Payments</NavLink>
                <NavLink className="hover:text-[#ffffff] hover:text-[22px]">Users</NavLink>
            </div>

            <hr className="my-20" />
<div className="mt-20 flex justify-center">


    <button className="btn btn-accent w-32">
        <NavLink to='/' className="hover:text-[#ffffff] hover:text-[22px]">  Go Home</NavLink>
      
    </button>
         
</div>
         </div>
    );
};

export default Sidebar;