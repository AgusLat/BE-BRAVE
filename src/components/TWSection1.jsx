import React from 'react'
import '../assets/css/theworld.css'
import img1 from "../assets/static/img/20-Battle.png"
import {CSSTransition} from 'react-transition-group'
import { LangContext } from '../context/langContext'
import { useContext, useState, useRef } from 'react'


export const TWSection1 = () => {

  const {language} = useContext(LangContext)
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className='twsection-container'>


    <div className='twsection'>
         
          <img className='mask' src={img1} loading="lazy" alt="" />
          <CSSTransition nodeRef= {nodeRef} in={isVisible} timeout={4000} appear={true} classNames='twTransition-right'>
          <div className='twsection-innerdiv right' ref={nodeRef}>
            <p>{language==='es'?' "Be Brave" es una historia corta. Ambientada en un mundo de fantasía oscura, en este caso Neoclásica; a finales de 1700s, principios de un 1800s alternativo.':'“Be Brave” is a short story. Set in a world of dark fantasy, neoclassical in this case; an alternative late 1800s and early 1900s.'}</p>
            <p>{language==='es'?"No es una historia mas de heroísmo, sino por el contrario de supervivencia y de debacle moral: Un hombre que deja a sus compañeros, con los que tenia un juramento, para volver con su familia. Miedo, incertidumbre, desesperación, culpa...":"It is not just another story of heroism, but on the contrary, of survival and moral debacle: A guy who leaves his teammates, with whom he had an oath, to return with his family. Fear, uncertainty, despair, guilt …"}</p>
            <button className='text-btn right-btn' onClick={()=>{setIsVisible((value)=> !value);}}>
              {isVisible?(language==='es'?'CERRAR':'CLOSE'):(language==='es'?'ABRIR':'OPEN')}
            </button>
          </div>

          </CSSTransition>
       
        
    </div>
    </div>
  )
}
