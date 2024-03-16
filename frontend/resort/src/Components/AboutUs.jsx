import React from 'react'
import image1 from '../Rooms/AboutUs/img1.jpg'
export default function AboutUs() {
  return (
    <div className='container' id='aboutus'>
<div className="container py-3 px-3">
    <div className="card border-primary mb-3">
        <div className="row g-0 align-items-center">
            <div className="col-md-5">
                <img src={image1} className="img-fluid" alt=".."/>
            </div>
            <div className="col-md-7">
                <div className="card-body">
                    <h2 className="card-title font-weight-bold">About Us</h2>
                    <p className="card-text">We Provide The Most Luxurious Hospitality Services
                        The land of sun, sand, and sea – Goa is synonymous with unhindered beauty and splendid recreation.
                        Paradise Hotels Goa is a captivating paradise for unwinding and revelling, perfect for an idyllic
                        family vacation and conducting important business meetings.
                    </p>
                    <p className="card-text">A vibrant concoction of colours & comfort, all five properties spread across
                        South Goa make for the best suit for a relaxed chilling experience. Bridging the gap between luxury
                        & rustic, our whimsical Beach huts, bungalows, & resorts at Palolem, Agonda, and Patnem are truly
                        cocooned in the lap of nature.
                    </p>
                    <p className="card-text">Grab a drink, feast on exotic seafood & other delicious delicacies and just
                        chill by the golden sands and the waves; & we, at Paradise Goa, will ensure you the best
                        staycations ever! We do entertain you with band performances, happy hours, & special requests
                        too!
                    </p>
                    <p className="card-text">We believe the happiness that comes from feeding souls is worth sharing. We
                        strive to positively impact the communities we live in and constantly practice our values.
                    </p>
                    <p className="card-text">We take pride in our well-experienced team, which has become a part of our
                        family and business over the years of working together. It is our pleasure to serve you.
                    </p>
                    <p className="card-text"><small className="text-primary"><b>- YashRaj Resort</b></small></p>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}
