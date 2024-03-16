import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

export default function CustomInput({ value, onClick }) {
  return (
    <div className='input-group'>
    <input type='text' className='form-control' value={value} onClick={onClick} readOnly></input>
    <div className='input-group-append'>
        <span className='input-group-text'>
            <FaCalendarAlt/>
        </span>
    </div>
</div>
  )
}
