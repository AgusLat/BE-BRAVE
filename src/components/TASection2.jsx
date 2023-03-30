import React from 'react'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'



export const TASection2 = () => {

    
  const {language} = useContext(LangContext)

  return (
    <div className='ta-section2'>
      <div className='ta-section2-inner'>

      <div className='ta-section2-inner-div'>
      <p>{language==='es'?'"Be Brave" es una historia ambientada en un 1800 ficticio, por ende buscaba que sus ilustraciones recordaran a antiguas obras del Neoclásico. ':'"Be Brave" is a story set in a fictitious 1800, therefore I wanted its illustrations to be reminiscent of old Neoclassical works.'}</p>
      <img src="/src/assets/static/img/30-Ride.png" alt="" />
      </div>
      <div className='ta-section2-inner-div'>

        <p>{language==='es'?'En segundo lugar y no menos importante, busco que la ambientación sea siempre una parte fundamental de mi obra. Imágenes que den en que pensar, que generen sensaciones, emociones. Para eso trabajo mucho en planos, composición y paletas de colores; teniendo como principal inspiración el cine. ':'Secondly, and no less important, I look for the setting to always be a fundamental part of my work. Images that fuels thoughts, that generate sensations, emotions. For that, I work a lot on planification, composition and color palettes; having as main inspiration the cinema.'}</p>
        <img src="/src/assets/static/img/36-In-Flames.png" alt="" />
    </div>
      </div>
    </div>
  )
}
