import React, { useRef } from 'react'
import image from '../Rooms/ContactUs/img1.jpg'
import axios from 'axios';

export default function ContactUs() {
    const firstName=useRef(null);
  const lastName=useRef(null);
  const address =useRef(null);
  const emailId=useRef(null);
  const enquiryDetails = useRef(null);
  const enquiryHandle = () => {
    const newEnquiry={
      fname: firstName.current.value,
      lname: lastName.current.value,
      address: address.current.value,
      emailId:emailId.current.value,
      data:enquiryDetails.current.value,

    };

    if (!firstName.current.value || !lastName.current.value || !emailId.current.value || !enquiryDetails.current.value || !address.current.value) {
      alert('Please fill all enquiry details.');
      return; 
    }
    axios
      .post("http://localhost:7066/enquiry/addEnquiry",newEnquiry )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(newEnquiry)
        console.log(err);
        alert("");
      });
  }
  return (
    <div className='container'>


<div className="container py-3">
  <div className="card border-primary mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={image} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text font-weight- bold text-primary">Yashraj Resort</p>
          <p className="card-text"><b>Address:</b> At/p Shani Shingnapur, tal, near Nandini lodging & Family Food Park ,Newasa, 414105</p>
          <p className="card-text"><b>Phone:</b> +91-9970735136 </p>
          <p className="card-text"><b>Email:</b> yashraj@restro.gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</div>


<form className="container py-3">
  <p className="text-large">We welcome inquiries. Get in touch and speak with one of our friendly customer representatives today.</p>
  <div className="text-primary">
    <h6>Required Information *</h6>
  </div>

  <div className="mb-3">
    <h6>FULL NAME <b className="text-primary">*</b></h6>
    <div className="row">
      <div className="col-md-6 mb-3">
        <input type="text" className="form-control" placeholder="First name" ref={firstName}/>
      </div>
      <div className="col-md-6 mb-3">
        <input type="text" className="form-control" placeholder="Last name" ref={lastName}/>
      </div>
    </div>
  </div>

  <div className="mb-3">
    <h6>ADDRESS <b className="text-primary">*</b></h6>
    <div className="row">
      <div className="col-md-12 mb-3">
        <input type="text" className="form-control" placeholder="" ref={address}/>
      </div>
    </div>
  </div>

  <div className="mb-3">
    <h6>EMAIL ID <b className="text-primary">*</b></h6>
    <div className="row">
      <div className="col-md-12 mb-3">
        <input type="email" className="form-control" id="inputEmail4" ref={emailId}/>
      </div>
    </div>
  </div>

  <div className="mb-3">
    <h6>WRITE HERE...</h6>
    <div className="row">
      <div className="col-md-12 mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={enquiryDetails}></textarea>
      </div>
    </div>
  </div>

  <div>
    <button type="submit" onClick={enquiryHandle} className="btn btn-primary">Submit</button>
  </div>
</form>



    </div>
  )
}
