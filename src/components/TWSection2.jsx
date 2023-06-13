import React from 'react'
import {CSSTransition} from 'react-transition-group'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext, useState, useRef } from 'react'
import img1 from "../assets/static/img/27-In-the-woods.png"
import img2 from "../assets/static/img/7-First-Light.png"




export const TWSection2 = () => {

  const {language} = useContext(LangContext)
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className='twsection-container'>

    <div className='twsection'>
        <img className='mask' src={img1} loading="lazy" alt="" />
        <CSSTransition nodeRef= {nodeRef} in={isVisible} timeout={4000} appear={true} classNames='twTransition-right'>
        <div className='twsection-innerdiv right' ref={nodeRef}>
          <p>{language==='es'?'Su atmósfera es de una belleza oscura y fluctuá entre colores cálidos que representan al país invadido, con clima árido y hostil, y fríos en momentos donde el personaje tiene un leve respiro o poco a poco se va acercando a su lugar de origen…':'Its atmosphere is darkly beautiful and fluctuates between warm colors representing an invaded country, with an arid and hostile nature, and cold when the character takes a slight breathe or gradually gets closer to his place of origin ...'}</p>
          <img className='mask sm-img' src={img2} alt="" />
          <button className='text-btn right-btn' onClick={()=>{setIsVisible((value)=> !value);}}>
              {isVisible?(language==='es'?'CERRAR':'CLOSE'):(language==='es'?'ABRIR':'OPEN')}</button>
        </div>
        </CSSTransition>
           
    </div>
    </div>
  )
}
