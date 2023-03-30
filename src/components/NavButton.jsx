import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbutton.css'





export default function NavButton( {name, route} ) {

/**
 * Changes navbar buttons class on click.
 * @param {HTMLButtonElement} e 
 */
const activeBtnEffect = (e)=>{
  
  document.querySelectorAll('.navbar-btn-active').forEach((e)=>{
        e.classList.replace('navbar-btn-active', 'navbar-btn')  
  
  });

  e.target.classList.replace('navbar-btn', 'navbar-btn-active')
};


  return (
    <>
      <Link className='navbar-link'  to={route}>
        <button className='navbar-btn' onClick={ activeBtnEffect } >
        {name}
        </button>
      </Link>
    </>
  )
}
