import React from 'react'

import './input.css'

function Input({type, placeholder, label, id , name}) {
  return (
    <div className='input'>
      <label htmlFor={id} className='label'>{label}</label>
      {
        id !== 'message-field' ? (
          <input type={type} id={id} placeholder={placeholder} name={name} className="input-field" required/>
        ) : (
          <textarea type={type} id={id} placeholder={placeholder} name={name} className="input-field textarea-field" required/>
        )
      }
    </div>
  )
}

export default Input
