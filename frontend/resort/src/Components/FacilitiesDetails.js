import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import '../Facilities.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function FacilitiesDetails() {
    const navigate=useNavigate()
    useEffect(() => {
        if(Cookies.get('authenticated'))
        {
          navigate("/facilitiesDetails")
        }
        else{
          
          navigate("/login")
        }
    
      });

       const[facilities,setFacilities]=useState([]);
        useEffect(() => {
            axios.get("http://localhost:7066/facilities/AllFacilitiesData")
              .then((res) => {
                console.log(res.data);
                    setFacilities(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }, []);

          const deleteHandle = (facilityId) => {
            axios
                .delete("http://localhost:7066/deleteFacility/"+ facilityId)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    alert(err);
                });
        };

    const FacilityName = useRef(null);
    const FacilityDesc = useRef(null);
    const available = useRef(null);
    const FacilityImg = useRef(null);
    
    const facilityHandle = () => {

        const formData = new FormData();
        formData.append('facilityName', FacilityName.current.value);
        formData.append('description', FacilityDesc.current.value);
        formData.append('availability', available.current.value);
        formData.append('image', FacilityImg.current.files[0]);
 
        
        axios
            .post("http://localhost:7066/saveFacilities",formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log(res.data);
                alert('Facilities saved successfully');
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong, please try again");
            });
    }

    return (
        <div className="container mb-2 mt-3" >
            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <div className="p-5 border border-dark rounded">
                        <h1 className="text-center">Facilities Details</h1>
                        <div className="mb-3">
                            <label htmlFor="facilityName" className="form-label">Facility Name</label>
                            <input type="text" className="form-control" id="facilityName" ref={FacilityName} />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="description" className="form-label">Facility Description</label>
                                <input type="text" className="form-control" id="description" ref={FacilityDesc} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="availability" className="form-label">Availability</label>
                                <input type="text" className="form-control" id="availability" ref={available} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="img" className="form-label">Facility Image</label>
                                <input type="file" className="form-control" id="img" ref={FacilityImg} accept="image/*" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <button className="btn btn-primary user-add" onClick={facilityHandle}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className="row">
                <div className=" border border-solid">
                    <div className="row text-center">
                        <h2>Facility details</h2>
                    </div>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr className='border'>
                                <th>facility Name</th>
                                <th>img Name</th>
                                {/* <th>description</th> */}
                                <th>availability</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facilities&& facilities.map((facility) => (
                                <tr>
                                    <td className='border'>{facility.facilityName}</td>
                                    <td className='border'>{facility.img}</td>
                                    {/* <td className='border'>{facility.description}</td> */}
                                    <td className='border'>{facility.availability}</td>
                                    <td className='border'><button className='btn btn-primary btn-sm' onClick={()=>{deleteHandle(facility.facilityId)}}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}
