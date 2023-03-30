import React from 'react'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'

export const TPSection4 = () => {
 
  const {language} = useContext(LangContext)

  return (

    <div className='tpsection-container'>
      <div className='tpsection4'>
        <p>{language==='es'?'La idea de animar las ilustraciones se generó en mitad del proyecto':'The idea of​​ animating the illustrations came up in the middle of the project.'}</p>
        <video controls autoPlay preload='auto'>
            <source src="/src/assets/static/video/sketch-video.mp4" type='video/mp4'/>
        </video>
      </div>
    </div>
  )
}
