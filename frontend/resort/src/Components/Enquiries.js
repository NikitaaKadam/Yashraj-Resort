import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Enquiries() {
    const[enquiry,setEnquiry]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:7066/enquiry/getEnquiry")
          .then((res) => {
            console.log(res.data);
                setEnquiry(res.data);
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
                <h2>Enquiry Details</h2>
            </div>
            <table className="table table-striped mt-3">
                <thead>
                    <tr className='border'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>emailId</th>
                        <th>Enquiry Details</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiry && enquiry.map((enq) => (
                    <tr>
                        <td className='border'>{enq.fname}</td>
                        <td className='border'>{enq.lname}</td>
                        <td className='border'>{enq.address}</td>
                        <td className='border'>{enq.emailId}</td>
                        <td className='border'>{enq.data}</td>
                    </tr>
                ))}  ; 
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
