import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Feedbacks() {
    const [feedbacks, setFeedback] = useState([])
    const deleteHandle = (feedbackId) => {
        axios
            .delete("http://localhost:7066/feedback/deleteFeedback/"+ feedbackId)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };
    useEffect(() => {
        axios
            .get("http://localhost:7066/feedback/AllFeedbackData")
            .then((res) => {
                console.log(res.data);
                setFeedback(res.data);
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
                        <h2>Feedback detail</h2>
                    </div>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr className='border'>
                                <th>feedback_id</th>
                                <th>user_id</th>
                                <th>booking_id</th>
                                <th>rating</th>
                                <th>comments</th>
                                <th>date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbacks && feedbacks.map((feedback) => (
                                <tr key={feedback.id}>
                                    <td className='border'>{feedback.feedbackId}</td>
                                    <td className='border'>{feedback.user.userId}</td>
                                    <td className='border'>{feedback.booking.bookingId}</td>
                                    <td className='border'>{feedback.rating}</td>
                                    <td className='border'>{feedback.comments}</td>
                                    <td className='border'>{feedback.date}</td>
                                    <td className='border'><button className='btn btn-primary btn-sm' onClick={()=>{deleteHandle(feedback.feedbackId)}}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
