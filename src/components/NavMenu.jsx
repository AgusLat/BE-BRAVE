import React from 'react'
import '../assets/css/navbutton.css'
import {CSSTransition} from 'react-transition-group'
import { useContext, useState, useRef } from 'react'
import NavButton from '../components/NavButton'
import img1 from '../assets/static/icons/menu.png'

const NavMenu = () => {

    const nodeRef = useRef(null)
    const [isVisible, setIsVisible] = useState(true)

  return (
    <div className='mobile-nav'>
        <img className='menu-icon' onClick={()=>{setIsVisible((value)=> !value);}} src={img1} alt="" />
        <CSSTransition 
            nodeRef= {nodeRef} 
            in={isVisible} 
            timeout={800}
            classNames='menu-transition'>
            <div className='mobile-nav-list' ref={nodeRef}>
                <NavButton name="BE BRAVE"    classProp='navbar-link-mobile'   route='/'/>
                <NavButton name="THE WORLD"   classProp='navbar-link-mobile'   route='/theworld'/>
                <NavButton name="THE PROCESS" classProp='navbar-link-mobile'   route='/theprocess'/>
                <NavButton name="THE AUTHOR"  classProp='navbar-link-mobile'   route='/theauthor'/>
            </div>
        </CSSTransition>
    </div>
  )
}

export default NavMenu