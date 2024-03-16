import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Bookings() {
    const navigate=useNavigate()
const deleteHandle=()=>{
    
}

const feedbackHandle=(bookingId)=>{
    Cookies.set('bookingId',bookingId)
    navigate('/feedback/');
}

    const[bookings,setBookings]=useState([]);
    
    useEffect(() => {
        const userId = Number(Cookies.get('userId'));
        axios.get("http://localhost:7066/booking/"+userId)
            .then((res) => {
                console.log(res.data);
                setBookings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
  return (
    <div className='container'>
    <div className="row">
        <div className=" border border-solid">
            <div className="row text-center">
                <h2>Booking details</h2>
            </div>
            <table className="table table-striped mt-3">
                <thead> 
                    <tr className='border'>
                        <th>Booking_id</th>
                        <th>user_id</th>
                        <th>room_id</th>
                        <th>check_in_date</th>
                        <th>check_out_date</th>
                        <th>tot_price</th>
                        <th>Action</th>
                        <th>feedback</th>
                    </tr>
                </thead>
                <tbody>
                {bookings && bookings.map((booking) => {
                    return(
                    <tr>
                        <td className='border'>{booking.bookingId}</td>
                        <td className='border'>{booking.user.userId}</td>
                        <td className='border'>{booking.room.roomId}</td>
                        <td className='border'>{booking.checkInDate}</td>
                        <td className='border'>{booking.checkOutDate}</td>
                        <td className='border'>{booking.room.pricePerNight}</td>
                        <td className='border'><button type="button" onClick={deleteHandle} className="btn btn-outline-primary">Delete</button></td>
                        <td className='border'><button type="button" onClick={()=>feedbackHandle(booking.bookingId)} className="btn btn-outline-primary">Feedback</button></td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
