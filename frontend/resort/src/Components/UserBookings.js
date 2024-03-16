import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserBookings() {
    const[bookings,setBookings]=useState([]);
    const deleteHandle = (bookingId) => {
        axios
            .delete("http://localhost:7066/booking/deleteBooking/" + bookingId)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }
    

    useEffect(() => {
        axios.get("http://localhost:7066/booking/getAllBooking")
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
                        <th>status</th>
                        <th>Action</th>
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
                        <td className='border'>{booking.status}</td>
                        <td className='border'><button type="button" className="btn btn-outline-primary" onClick={()=>{deleteHandle(booking.bookingId)}}>Delete</button></td>
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
