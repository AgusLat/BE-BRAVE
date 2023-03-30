import React from 'react'
import '../assets/css/footer.css'
import { DevInfoLinks } from '../components/DevInfoLinks'
import { FooterLinks } from '../components/FooterLinks'

export default function Footer() {
  return (
    <>
    <footer id='footer-container' className='footer-container'>
       <FooterLinks />
      <DevInfoLinks />
    </footer>
    </>
  )
}
