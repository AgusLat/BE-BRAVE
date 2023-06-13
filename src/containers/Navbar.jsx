import React from 'react'
import NavButton from '../components/NavButton'
import ContactLink from '../components/ContactLink'
import '../assets/css/navbar.css'
import { LangButton } from '../components/LangButton'
import NavMenu from '../components/NavMenu'

export default function Navbar({footerRef}) {

  const toFooter = ()=>{
    footerRef.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className='navbar-container'>
      <NavMenu />
      <NavButton name="BE BRAVE"    classProp='navbar-link hide-on-mobile'  route='/'/>
      <NavButton name="THE WORLD"   classProp='navbar-link hide-on-mobile'  route='/theworld'/>
      <NavButton name="THE PROCESS" classProp='navbar-link hide-on-mobile'  route='/theprocess'/>
      <NavButton name="THE AUTHOR"  classProp='navbar-link hide-on-mobile'  route='/theauthor'/>
      <ContactLink toFooterMethod={toFooter} name="CONTACT" />
      <LangButton />
    </div>
  )
}
