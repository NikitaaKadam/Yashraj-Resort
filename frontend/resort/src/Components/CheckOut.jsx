import React, { useState } from 'react'
import Datepicker from 'react-datepicker'
import CustomInput from './CustomInput';
export default function CheckOut() {
    const [selectedDate1, setDate1] = useState(null);
    return (
      <>
         
           <label><Datepicker selected={selectedDate1} onChange={date => setDate1(date)} customInput={<CustomInput/>} /></label>
           <div className='row'>

  
           </div>
      </>
      
    )
}
