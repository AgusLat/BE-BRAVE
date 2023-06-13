import React from 'react'
import {CSSTransition} from 'react-transition-group'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext, useState, useRef } from 'react'
import img1 from "../assets/static/img/42-Stars.png"



export const TWSection3 = () => {

  const {language} = useContext(LangContext)
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  return (

    <div className='twsection-container'>

    <div className='twsection'>
        <img className='mask' src={img1} loading="lazy" alt="" />
        <CSSTransition nodeRef= {nodeRef} in={isVisible} timeout={4000} appear={true} classNames='twTransition-left'>

        <div className='twsection-innerdiv left' ref={nodeRef}>
        <p>{language==='es'?'El mundo en “Be Brave” es un mundo un tanto particular. Hay magia, pero se tiene muy poco conocimiento de esta. En la mayoría de los casos se sabe solo por creencias o mitos populares y leyendas.':'The world in “Be Brave” is a somewhat particular place. There is magic, but there is very little knowledge of it. In most cases it is known only by beliefs and popular myths, legends and such .'}</p>
        <p>{language==='es'?'Se sabe que cierta rama de monjes de Aereann dedicaron sus vidas a estudiar esta magia (los que dejan levitando en el aire a nuestro protagonista y su caballo al final, y lo curan de las quemaduras), esta energía invisible presente en todo ese mundo pero desconocida e imperceptible para muchos.':'It is known that a certain kind of Aereann monks dedicated their lives to studying this magic (the ones that leave our protagonist levitating in the air at the end, with the horse and heal him from his burns), this invisible energy present in all that world but unknown and imperceptible to many.'}</p>
        <button className='text-btn right-btn' onClick={()=>{setIsVisible((value)=> !value);}}>
              {isVisible?(language==='es'?'CERRAR':'CLOSE'):(language==='es'?'ABRIR':'OPEN')}
        </button>
        </div>
        </CSSTransition>
    </div>
    </div>
  )
}
