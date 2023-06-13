import React, { forwardRef } from 'react'
import '../assets/css/footer.css'
import { DevInfoLinks } from '../components/DevInfoLinks'
import { FooterLinks } from '../components/FooterLinks'

export default forwardRef(function Footer(props,ref) {


  return (
    <>
    <footer ref={ref} id='footer-container' className='footer-container'>
      <FooterLinks />
      <DevInfoLinks />
    </footer>
    </>
  )
})
