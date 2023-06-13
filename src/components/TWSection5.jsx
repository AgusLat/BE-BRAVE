import React from 'react'
import {CSSTransition} from 'react-transition-group'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext, useState, useRef } from 'react'
import img1 from "../assets/static/img/45-Beach.png"




export const TWSection5 = () => {

  const {language} = useContext(LangContext)
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  return (

    <div className='twsection-container'>
      <div className='twsection'>   
        <img className='mask' src={img1} loading="lazy" alt="" />
        <CSSTransition nodeRef= {nodeRef} in={isVisible} timeout={4000} appear={true} classNames='twTransition-right'>

        <div className='twsection-innerdiv right' ref={nodeRef}>
          <p>{language==='es'?'Por ultimo, el enemigo en esta historia no aparece, esta oculto y se sabe poco. La idea es que sepas que el verdadero enemigo no eran los Surennos, sino el propio Adair (el protagonista) con si mismo.' :'Finally, the enemy in this story does not appear, it is hidden and little is known. The idea is that you know that the real enemy was not the Surennos, but Adair (the protagonist) with himself.'}</p>
          <p>{language==='es'?'Una historia que pretende realismo de emociones y sentimientos humanos. Adair no es ningún príncipe, famoso o figura reconocida. Simplemente formaba parte de una elite de caballería, un Husar, sintió el miedo y huyo. Una emoción muy humana, desagradable para algunos, pero humana al fin.' :'It is a story that seeks for realism in the sense of human emotions and feelings. Adair is not a prince, nor famous or recognized. Just someone who was part of an elite cavalry, a Hussar, got scared and ran away. A very human emotion, unpleasant in the eyes of some, but human nonetheless.'}</p>
          <p>{language==='es'?'Queda en uno si hizo lo correcto o no...' :'It is up to you if he did the right thing or not...'}</p>
          <button className='text-btn right-btn' onClick={()=>{setIsVisible((value)=> !value);}}>
            {isVisible?(language==='es'?'CERRAR':'CLOSE'):(language==='es'?'ABRIR':'OPEN')}
          </button>
        </div>
          </CSSTransition>
      </div>
    </div>
    
  )
}
