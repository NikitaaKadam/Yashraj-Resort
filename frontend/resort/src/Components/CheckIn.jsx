import React, { useState } from 'react'

import Datepicker from 'react-datepicker'
import CustomInput from './CustomInput';
export default function CheckIn() {
    const [selectedDate, setDate] = useState(null);
  return (
    <>
         <label><Datepicker selected={selectedDate} onChange={date => setDate(date)} customInput={<CustomInput/>} /></label>
    </>
    
  )
}
