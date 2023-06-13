import React, {useRef} from 'react'
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar'
import { Outlet } from 'react-router-dom'
import '../assets/css/layout.css'


export default function Layout() {

  const footerSection = useRef(null)

  return (
    <>
    <Navbar footerRef={footerSection} />
    <div id='render-outlet'>
       <Outlet/>
    </div>
    <Footer ref={footerSection} />
    </>

  )
}
