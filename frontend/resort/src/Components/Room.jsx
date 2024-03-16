import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Room() {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:7066/room/AllRoomData')
            .then(response => {
                setRooms(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching room data:', error);
            });
    }, []);

    const bookHandle = () => {
        if (Cookies.get('authenticated')) {
            navigate('/booking');
        } else {
            alert('Login is required');
            navigate('/login');
        }
    };

    return (
        <div className='container-fluid'>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 g-3">
                        {rooms && rooms.map(room => (
                            <div key={room.id} className="col">
                                <div className="card shadow">
                                    <img src={room.roomImage} className="card-img-top" alt={room.roomType} />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>{room.roomType}</b></h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                
                                            <Link to="/booking" className="btn btn-primary">Book Now</Link>
                                                
                                            </div>
                                            <small className="text-muted fs-4">₹{room.pricePerNight}/-</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          
        </div>
    );
}
