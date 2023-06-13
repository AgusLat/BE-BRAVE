import React from 'react'
import '../assets/css/navbutton.css'


export default function ContactLink({name, toFooterMethod}) {

  
  return (
    <>
    <a className='navbar-contact-link' >
      <button id='contact-btn' className='navbar-btn' onClick={toFooterMethod} >
        {name}
        </button>
      </a>
    </>
  )
}
