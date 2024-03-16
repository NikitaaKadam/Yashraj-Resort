import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../booking.css';

export default function Booking() {
  const navigate = useNavigate()
  useEffect(() => {
    if (Cookies.get('authenticated')) {
      navigate("/booking")
    }
    else {
      alert("you must be logged in")
      navigate("/login")
    }

  });
  const checkIn = useRef();
  const checkOut = useRef();
  const noOfGuest = useRef();
  const [newRoom, setNewRoom] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [total_price, setTotalPrice] = useState(0);
  const [noOfDays, setNoOfDays] = useState(0);
  const [userId, setUserId] = useState();
  const [isSubmit,setIsSubmit] = useState();
  const bookRoomHandle = () => {
    if (!checkIn.current.value && !checkOut.current.value) {
      alert('Please select both check-in and check-out dates')
      return;
    }
    setIsSubmit(true);
    alert('Scan the QR Code and pay the payment')
  };

  const paymentHandle=()=>{
    const userId = Number(Cookies.get('userId'));
    console.log(typeof userId);
    const newBooking = {
      user: userId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      room: roomId,
      totalPrice: total_price
    };

    axios.post("http://localhost:7066/booking/addBooking", newBooking)
      .then((res) => {
        console.log(newBooking);
        alert("room booked successfully")
        window.location.reload();
      })
      .catch((err) => {

        console.log(err);
        alert(err);
      });
  }

  const handleBooking = (room) => {
    setSelectedRoom(true);
    const userId = Number(Cookies.get('userId'));
    setUserId(userId)
    setRoomId(room.roomId);
    setTotalPrice(noOfDays * room.pricePerNight);
  };

  const roomHandle = async (e) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    if (!checkIn.current.value && !checkOut.current.value) {
      alert('Please select both check-in and check-out dates')
      return;
    }
    setButtonClicked(true);
    const formattedCheckInDate = formatDate(new Date(checkIn.current.value));
    const formattedCheckOutDate = formatDate(new Date(checkOut.current.value));


    setCheckInDate(formattedCheckInDate);
    setCheckOutDate(formattedCheckOutDate);

    const checkInTime = new Date(formattedCheckInDate).getTime();
    const checkOutTime = new Date(formattedCheckOutDate).getTime();
    const differenceInMilliseconds = checkOutTime - checkInTime;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsPerDay;
    setNoOfDays(differenceInDays);

    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:7066/available", {
        params: {
          checkInDate: formattedCheckInDate,
          checkOutDate: formattedCheckOutDate,
          capacity: noOfGuest.current.value
        }
      });
      setNewRoom(response.data);

    } catch (error) {
      console.log(formattedCheckInDate);
      console.log(formattedCheckOutDate);
      console.error("Error fetching available rooms:", error);
    }
  };

  return (
    <>
      <div className="container border border-solid">
        <div className="row">
          <div className='col-9'>
            <div className="container ">
              <div className="row bg-dark-subtle">
                <h2>Check Availability</h2>
              </div>
              <div className="row d-flex mt-3">
                <div className="col-3 ">
                  <div className='row'>
                    <h4 className='text-center fs-6'>Check In</h4>
                  </div>
                  <div className='row shadow p-1'>
                    <input type='date' placeholder='Enter Date of Birth' className='form-control' ref={checkIn} />
                  </div>
                  <div className='row mt-3'>
                    <button type="button" className="btn btn-outline-secondary" onClick={roomHandle}>Search</button>
                  </div>
                </div>
                <div className="col-3">
                  <h4 className='text-center fs-6'>Check Out</h4>
                  <div className='row shadow p-1'>
                    <input type='date' placeholder='Enter Date of Birth' className='form-control' ref={checkOut} />
                  </div>
                </div>
                <div className="col-3">
                  <h4 className='text-center fs-6'>no of guests</h4>
                  <div className='row shadow p-1'>
                    <select ref={noOfGuest} className="form-select" aria-label="Default select example">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row bg-dark-subtle mt-3">
                <h2> Available Rooms</h2>
                {buttonClicked ? (
                  <div className='container-fluid'>
                    <div className="album py-5 bg-light">
                      <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                          {newRoom && newRoom.map(room => (
                            <div key={room.id} className="col">
                              <div className="card shadow">
                                <img src={room.roomImage} className="card-img-top" alt={room.roomType} />
                                <div className="card-body">
                                  <h5 className="card-title"><b>{room.roomType}</b></h5>
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                      <button className="btn btn-primary" onClick={() => { handleBooking(room) }} type="submit">Select</button>
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
                ) : (
                  <div className="row bg-dark-subtle mt-3"></div>
                )}
              </div>
              <div className='row'>
              <div className='col-xl-8'>
                <div className="row bg-dark-subtle mt-3">
                  <h2> Your Details</h2>
                </div>
                <div className="row g-3 mt-1">
                  <div className="col">
                    <p>user id</p>
                    <input type="text" className="form-control" value={userId} />
                  </div>
                  <div className="col">
                    <p> room id</p>
                    <input type="text" className="form-control" value={roomId} />
                  </div>
                </div>
                <div className="row g-3 mt-1">
                  <div className="col">
                    <p>checkIn Date</p>
                    <input type="text" className="form-control" value={checkInDate} />
                  </div>
                  <div className="col">
                    <p>checkOut Date</p>
                    <input type="text" className="form-control" value={checkOutDate} />
                  </div>
                </div>
                <div className="col">
                  <p>total price</p>
                  <input type="text" className="form-control" value={total_price} />
                </div>
                <div className='row mt-1'>
                  <div className='col-3 mt-2'>
                    <button type="button" className="btn btn-outline-secondary" onClick={bookRoomHandle}>submit</button>
                  </div>
                </div>
              </div>
            { isSubmit?(
              <div className='col-xl-4'>
                <img src='QRcode.jpeg' className='qrimage'/>
                <button type="button" className="btn btn-outline-secondary pay-btn" onClick={paymentHandle}>Pay</button>
              </div>
            ):("")
            }
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="container ">
              <div className="row">
                <div className='container mt-0'>
                  <div className="accordion accordion-flush border border-black" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Hotel details
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <h5>
                            <b>Resort Name:</b><br />
                            <h6>Yashraj</h6>
                          </h5>
                          <h5>
                            <b>Email:</b><br />
                            <h6>yashrajr@gmail.com</h6>
                          </h5>
                          <h5>
                            <b>Mobile:</b><br />
                            <h6>+917057379583</h6>
                          </h5>
                          <h5>
                            <b>Resort Address:</b><br />
                            <h6>At/p shani shingnapur,tal,near Nandini lodging&family food park,newasa maharashtrs</h6>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Cancellation Policy
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          If cancelled before 7 days of Check In date booking will be non Refundable
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-info-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          CheckIn/CheckOut Policy
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Check In Time:12:00PM<br />Check Out Time:10:00AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
