import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../Header.css';
import logo from './logo.jpeg';

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = Cookies.get('authenticated') === 'true';
    const admin = Cookies.get('isAdmin') === 'true';
    const user = Cookies.get('isUser') === 'true';
    setAuthenticated(auth);
    setIsAdmin(admin);
    setIsUser(user);
  }, []);

  const handleLogout = () => {
    Cookies.remove('authenticated');
    Cookies.remove('isAdmin');
    Cookies.remove('isUser');
    setAuthenticated(false);
    setIsAdmin(false);
    setIsUser(false);
    navigate('/login')
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-toggler d-flex">
      <div className="container-fluid h">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          {(authenticated && isAdmin) ? (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/userBookings">Bookings</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/feedbacks">Feedbacks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/enquiries">Enquiries</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/roomdetails">Room Details</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/galleryDetails">Gallery Details</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/facilitiesDetails">Facility Details</Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              {authenticated && isUser ? (
                <>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/aboutus">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/rooms">Rooms</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/bookings">My Bookings</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white" to="/facility">Facility</Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/contactUs">Contact Us</Link>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/aboutus">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/rooms">Rooms</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/facility">Facility</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/contactus">Contact Us</Link>
                    </li>
                  </ul>
                </>
              )}
            </>
          )}
          <div className="d-flex">
            {authenticated ? (
              <button className="btn btn-outline-success text-white" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" className="btn btn-outline-secondary text-white">Login</Link>
            )}
            {!isAdmin ? (
              <Link to="/booking" className="btn btn-outline-secondary text-white ms-2">Book Now</Link>
            ) : ("")}
          </div>
        </div>
      </div>
    </nav >
  );
}

export default Header;
