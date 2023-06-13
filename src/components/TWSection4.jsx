import React from 'react'
import {CSSTransition} from 'react-transition-group'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext, useState, useRef } from 'react'
import img1 from "../assets/static/img/37-STOP.png"
import img2 from "../assets/static/img/39-Gaze.png"




export const TWSection4 = () => {

  const {language} = useContext(LangContext)
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  return (

<div className='twsection-container'>
    <div className='twsection'>
      <img className='mask' src={img1} loading="lazy" alt="" />
      <CSSTransition nodeRef= {nodeRef} in={isVisible} timeout={4000} appear={true} classNames='twTransition-left'>

        <div className='twsection-innerdiv left' ref={nodeRef}>
          <p>{language==='es'?'Pero estos monjes no se vinculan con el mundo. Son una secta respetada por lo que son capaces de hacer.':'But these monks do not connect with the world. They are a respected cult for what they are capable of doing.'}</p>
        <p className='aereann'>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0</p>
        <img className='mask sm-img' src={img2}  alt="" />
        <button className='text-btn right-btn' onClick={()=>{setIsVisible((value)=> !value);}}>
              {isVisible?(language==='es'?'CERRAR':'CLOSE'):(language==='es'?'ABRIR':'OPEN')}
        </button>
      </div>
      </CSSTransition>
    </div>
</div>
  )
}
