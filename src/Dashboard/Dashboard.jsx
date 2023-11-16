import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="flex gap-4">
            <div className="w-64">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full">
                <h2 className="text-6xl mt-10 font-semibold text-[#22577A]">Admin Dashboard</h2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;