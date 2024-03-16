import React, { useState, useEffect } from 'react';

import axios from 'axios';
import '../Facilities.css'
export default function Facility() {

    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7066/facilities/AllFacilitiesData')
            .then(response => {
                setFacilities(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching room data:', error);
            });
    }, []);

    return (
<div className="container mt-3 mb-3">
    <div className="row">
        {facilities && facilities.map((facility, index) => (
            <div className="col-md-6 mb-3" key={index}>
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={facility.img} className="card-img" alt="Facility" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{facility.facilityName}</h5>
                                <p className="card-text">{facility.description}</p>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

    );
}