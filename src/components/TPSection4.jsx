import React from 'react'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'
import video1 from '../assets/static/video/sketch-video.mp4'

export const TPSection4 = () => {
 
  const {language} = useContext(LangContext)

  return (

    <div className='tpsection-container'>
      <div className='tpsection4'>
      
        <video controls autoPlay preload='auto'>
            <source src={video1} type='video/mp4'/>
        </video>
        <p>{language==='es'?'La idea de animar las ilustraciones se generó en mitad del proyecto. Entre ilustraciones y texto, hay un total de 70 videos.':'The idea of​​ animating the illustrations came up in the middle of the project. Between illustrations and text, there is a total of 70 videos.'}</p>
      </div>
    </div>
  )
}
