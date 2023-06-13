import React from 'react'
import '../assets/css/theauthor.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'
import img1 from '../assets/static/img/30-Ride.png'




export const TASection3 = () => {

    const {language} = useContext(LangContext)

  return (
    <div className='ta-section3-4'>
         {/* <p>{language==='es'?'Mi estilo puede dividirse en dos puntos:':'My style can be divided in two parts:'} <b>{language==='es'?'REALISMO':'REALISM'}</b> {language==='es'?'y':'and'} <b>{language==='es'?'AMBIENTACION':'SETTING'}</b>.</p> */}
         <p><b>{language==='es'?'REALISMO':'REALISM'}</b></p>
    

        <div className='ta-section3-4-inner'>


            <div className='ta-section3-4-inner-div'>
                <p>{language==='es'?'Siempre tuve una tendencia marcada hacia el detalle. Bien podría dedicar mi obra al Matte Painting, limitándome solo a composición fotografica e imagen 3D. Pero, también me agrada la idea de que el resultado final deje entrever un conclusión artística de tipo "clásico".':'I always had a marked tendency towards detail. I could only dedicate my work to Matte Painting, limiting myself only to photographic composition and 3D image. But, I also like the idea that the final result suggests a "classical" artistic conclusion.'}</p>
                <div className='ta-section3-inner-div-img animation-escape'>
                  <img src={img1} alt="" />
                </div>
                <p>{language==='es'?'Este balance tuvo un impacto significativo en el corto."Be Brave" es una historia ambientada en un 1800 ficticio, por ende buscaba que sus ilustraciones recordaran a antiguas obras del Neoclásico. ':'This balance had a significant impact on the short."Be Brave" is a story set in a fictitious 1800, therefore I wanted its illustrations to be reminiscent of old Neoclassical works.'}</p>
            
            </div>
        </div>
    </div>
  )
}
