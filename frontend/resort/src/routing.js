import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Room from "./Components/Room";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Gallery from "./Components/Gallery";
import Booking from "./Components/Booking";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Bookings from "./Components/Bookings";
import Users from "./Components/Users";
import Enquiries from "./Components/Enquiries";
import Feedbacks from "./Components/Feedbacks";
import RoomDetails from "./Components/RoomDetails";
import FeedBack from "./Components/Feedback";
import GalleryDetails from "./Components/GalleryDetails";
import Facility from "./Components/Facility";
import FacilitiesDetails from "./Components/FacilitiesDetails";
import UserBookings from "./Components/UserBookings";
const customRouter = createBrowserRouter([
    {
      path: "",
      element:<App/>, 
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
            path:"/rooms",
            element:<Room/>
        },
        {
          path:"/aboutus",
          element:<AboutUs/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
    },
    {
      path:"/gallery",
      element:<Gallery/>
  },
  {
    path:"/booking",
    element:<Booking/>
},
{
  path:"/login",
  element:<Login/>
},{
  path:"/signup",
  element:<Signup/>
},
{
  path: "/bookings",
  element:<Bookings/>
},
{
  path: "/users",
  element:<Users/>
},
{
  path: "/enquiries",
  element:<Enquiries/>
},
{
  path: "/facility",
  element:<Facility/>
},
{
  path: "/feedbacks",
  element:<Feedbacks/>
}
,
{
  path: "/facilitiesDetails",
  element:<FacilitiesDetails/>
}
,
{
  path: "/roomdetails",
  element:<RoomDetails/>
}
,
{
  path: "/feedback",
  element:<FeedBack/>
},
{
  path: "/galleryDetails",
  element:<GalleryDetails/>
},
{
  path: "/userBookings",
  element:<UserBookings/>
}
      ],
    }
  ]);
  export default customRouter;