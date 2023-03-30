import React from 'react'
import NavButton from '../components/NavButton'
import ContactLink from '../components/ContactLink'
import '../assets/css/navbar.css'
import { LangButton } from '../components/LangButton'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <NavButton name="BE BRAVE" route='/'/>
      <NavButton name="THE WORLD" route='/theworld'/>
      <NavButton name="THE PROCESS" route='/theprocess'/>
      <NavButton name="THE AUTHOR" route='/theauthor'/>
      <ContactLink name="CONTACT" />
      <LangButton />
    </div>
  )
}
