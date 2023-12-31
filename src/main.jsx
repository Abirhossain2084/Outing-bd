import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/Root/Root';
import Home from './Componenets/Home/Home';
import Login from './Componenets/Login/Login';
import Register from './Componenets/Register/Register';

import AuthProvider from './Providers/AuthProvider';
import Packages from './Componenets/Packages/Packages';
// import Services from './Componenets/Services/Services';
import About from './Componenets/AboutUs/About';
import Contact from './Componenets/ContactUs/Contact';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PackageDetails from './Componenets/Packages/PackageDetails';
import MyBookings from './Componenets/MyBookings/MyBookings';
import DoReview from './Componenets/Review/DoReview';
import Guides from './Componenets/Guides/Guides';
import GuideDetails from './Componenets/Guides/GuideDetails';
import DoGuideReview from './Componenets/Review/DoGuideReview';
import Dashboard from './Dashboard/Dashboard';
import DashboardPackages from './Dashboard/DashboardPackages';
import AddPackages from './Dashboard/AddPackages';
import DashboardGuides from './Dashboard/DashboardGuides';
import AddGuides from './Dashboard/AddGuides';
import PackagePayment from './Componenets/Paymnets/packagePayment';
import PackagePaymentCancel from './Componenets/Paymnets/packagePaymentCancel';
import Payments from './Dashboard/Payments';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<Error></Error>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },     
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/packages",
        element:<Packages></Packages>,
        loader: ()=> fetch('http://localhost:5000/packages')
      },
      {
        path:"/packages/:id",
        element:<PackageDetails></PackageDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`)
      },
      {
        path:"/bookings",
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        
      },
     

      {
        path:"/reviews/:id",
        element:<PrivateRoute><DoReview></DoReview></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
      },
      {
        path:"/guidereviews/:id",
        element:<PrivateRoute><DoGuideReview></DoGuideReview></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/guidebookings/${params.id}`)
      },

      {
        path:"/guides",
        element:<Guides></Guides>,
        loader: ()=> fetch('http://localhost:5000/guides')
      },
      {
        path:"/guides/:id",
        element:<GuideDetails></GuideDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/guides/${params.id}`)
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"payment/success/:tranId",
        element:<PackagePayment></PackagePayment>
      },
      {
        path:"payment/fail/:tranId",
        element:<PackagePaymentCancel></PackagePaymentCancel>
      },
     
      
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPackages></DashboardPackages>,
        loader: () => fetch('http://localhost:5000/packages')
      },
      {
        path: "/dashboard/add_packages",
        element: <AddPackages></AddPackages>,
      },
      {
        path: "/dashboard/guides",
        element: <DashboardGuides></DashboardGuides>,
        loader: () => fetch('http://localhost:5000/guides')
      },
      {
        path: "/dashboard/add_guides",
        element: <AddGuides></AddGuides>,
      },
      {
        path: "/dashboard/payments",
        element: <Payments></Payments>,
        loader: () => fetch('http://localhost:5000/payment')
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
