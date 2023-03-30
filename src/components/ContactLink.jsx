import React from 'react'
import '../assets/css/navbutton.css'

export default function ContactLink({name}) {
  return (
    <>
    <a className='navbar-link' href="#footer-container">
      <button className='navbar-btn'>
        {name}
        </button>
      </a>
    </>
  )
}
