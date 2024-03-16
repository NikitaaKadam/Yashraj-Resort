import React, { useRef, useState } from 'react';
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../Feedback.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function FeedBack() {
  const rating = useRef(null);
  const comments = useRef("");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };
  const userId=Number(Cookies.get('userId'));
  const bookingId=Number(Cookies.get('bookingId'));
  const navigate=useNavigate();
  const feedbackHandle = () => {
    const newFeedback = {
      rating: rating.current.value,
      comments: comments.current.value,
      date: new Date().toISOString(),
      user: { userId: userId },
      booking: { bookingId: bookingId } 
  };
  if (!rating.current.value || !comments.current.value) {
    alert('Please fill all feedback details.');
    return; 
  }
    axios
      .post("http://localhost:7066/feedback/addFeedback", newFeedback)
      .then((res) => {
        console.log(res.data);
        alert('Feedback submitted successfully');
        navigate('/bookings')
      })
      .catch((err) => {
        console.log(newFeedback)
        console.error(err);
        alert('Failed to submit feedback. Please try again.');
      });
  };

  return (
    <div className='row justify-content-center align-items-center vh-100 feedback'>
      <div className='col-xl-6 container p-5 border border-dark rounded'>
        <h1 className='text-center mb-4'>Feedback</h1>
        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor='rating' className='fs-3 rate'>Give Us Rating :</label>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleRatingChange(index + 1)}
                className='border border-solid fs-3'
              >
                {index < selectedRating ? <AiFillStar style={{ color: 'orange' }} /> : <AiOutlineStar />}
              </span>
            ))}
            <input type='hidden' value={selectedRating} ref={rating} />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <label htmlFor='comments' className='fs-3'>Comments</label>
            <input type='text' placeholder='Write your comments' className='form-control feedback-input' ref={comments} />
          </div>
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary btn-lg' onClick={feedbackHandle}>Submit</button>
        </div>
      </div>
    </div>
  );
}
