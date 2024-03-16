import React, { useRef,useState } from 'react'
import axios from 'axios';

export default function GalleryDetails() {

    const [message, setMessage] = useState(null);
    const Img = useRef(null);
    const Description= useRef(null);

    const galleryHandle = () => {
        const imgFile = Img.current.files[0];
        const newGallery = new FormData();
        newGallery.append('image', imgFile);
        newGallery.append('description', Description.current.value);
        console.log(newGallery);
        axios
            .post("http://localhost:7066/image/saveImg", newGallery, {headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then((res) => {
                console.log(res.data);
                // setMessage('Image added successfully');
                // setTimeout(() => setMessage(null), 3000);
            })
            .catch((err) => {
                console.log(err);
                alert("something went wrong, please try again");
                
            });
    }

    // const deleteFeedback = (feedbackId) => {
    //     axios
    //       .delete(`http://localhost:7066/feedback/deleteFeedback/${feedbackId}`)
    //       .then((res) => {
    //         console.log(res.data);
    //         alert("Feedback deleted successfully");
            
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         alert("Something went wrong, please try again");
    //       });
    //   };

    return (
        <div className='row justify-content-center align-items-center vh-100 feedback'>
            <div className='col-xl-6 container p-5 border border-dark rounded'>
                <h1 className='text-center'>Gallery Details</h1>
                <div className='row mb-2'>
                    <div className='col'>
                        <label htmlFor="img" className="form-label"> Image</label>
                        <input type="file" className="form-control" id="roomImage" ref={Img} accept="image/*" />
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-xl-6 mb-2'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' placeholder='Write a description' className='form-control' ref={Description} />
                    </div>
                </div>
                
                <div className='d-grid'>
                    <button className='btn btn-primary' onClick={galleryHandle}>Add</button>
                </div>
                {message && <div>{message}</div>}
            </div>
        </div>
    )
}