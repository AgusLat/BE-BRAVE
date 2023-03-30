import React, { useState, useEffect } from 'react'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import { Outlet } from 'react-router-dom'
import '../assets/css/layout.css'


export default function Layout() {


  return (
    <>
    <Navbar/>
    <div id='render-outlet'>
       <Outlet/>
    </div>
    <Footer/>
    </>

  )
}
