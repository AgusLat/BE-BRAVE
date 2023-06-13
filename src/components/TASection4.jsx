import React from 'react'
import '../assets/css/theauthor.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'
import img1 from '../assets/static/img/25-Murals.png'
import video1 from '../assets/static/video/Speedpaint1.mp4'






export const TASection4 = () => {

    const {language} = useContext(LangContext)

  return (
    <div className='ta-section3-4'>
      <p><b>{language==='es'?'AMBIENTACION':'SETTING'}</b></p>
        <div className='ta-section3-4-inner'>
            <div className='ta-section3-4-inner-div'>
            <p>{language==='es'?'En segundo lugar y no menos importante, busco que la ambientación sea siempre una parte fundamental de mi obra. Imágenes que den en que pensar, que generen sensaciones, emociones.':'Secondly, and no less important, I look for the setting to always be a fundamental part of my work. Images that fuels thoughts, that generate sensations, emotions.'}</p>
            <div className='ta-section4-inner-div-img animation-scenery'>
              <img src={img1} alt="" /> 
            </div>
            <p>{language==='es'?'Para eso trabajo mucho en planos, composición y paletas de colores; teniendo como principal inspiración el cine. ':'For that, I work a lot on planification, composition and color palettes; having as main inspiration the cinema.'}</p>
            <div className='ta-section4-video-div'>
               
                <video controls >
                    <source src={video1} type='video/mp4'/>
                </video>

            </div>
            <p>{language==='es'?'Directores como Sam Mendes, Christopher Nolan, Steven Spielberg, etc., han sido una gran referencia para mi trabajo y la forma de crear escenas de nivel cinematográfico que hablen por si solas.':'Directors like Sam Mendes, Christopher Nolan, Steven Spielberg, etc., have been a great reference for my work and the way to create cinematographic level scenes that speak for themselves.'}</p>

            </div>

        </div>
    </div>
  )
}
