import React, { useContext } from 'react'
import { LangContext } from '../context/langContext'

export const TASection1 = () => {

  const {language} = useContext(LangContext)

  return (
    <div className='ta-section1'>
        <div className='ta-section1-inner-div1'>
            <img id="profile-pic" src="/src/assets/static/img/ProfilePic.jpg" alt="" />
        </div>
        <div className='ta-section1-inner-div2'>
          <div>
          <p>{language==='es'?'Mi estilo puede dividirse en dos puntos: Realismo y Ambientación.':'My style can be divided in two parts: Realism and Setting.'}</p>
            <p>{language==='es'?'Siempre tuve una tendencia marcada hacia el detalle. Bien podría dedicar mi obra al Matte Painting, limitándome solo a composición fotografica e imagen 3D. Pero, también me agrada la idea de que el resultado final deje entrever un conclusión artística de tipo "clásico".':'I always had a marked tendency towards detail. I could only dedicate my work to Matte Painting, limiting myself only to photographic composition and 3D image. But, I also like the idea that the final result suggests a "classical" artistic conclusion.'}</p>
            <p>{language==='es'?'Este balance tuvo un impacto significativo en el corto.':'This balance had a significant impact on the short.'}</p>
            
            
          </div>
        
        <div>

            <h2>Technologies</h2>
            <ul>
              <li> <img src="src/assets/static/icons/adobe-photoshop.svg" role="img" alt="" /> Photoshop</li>
              <li> <img src="src/assets/static/icons/adobe-after-effects.svg" role="img" alt="" />After Effects</li>
              <li> <img src="src/assets/static/icons/adobe-audition.svg" role="img" alt="" /> Audition</li>
              <li> <img src="src/assets/static/icons/adobe-indesign.svg" role="img" alt="" /> InDesign</li>
              <li> <img src="src/assets/static/icons/adobe-lightroom.svg" role="img" alt="" /> Lightroom</li>
              <li> <img src="src/assets/static/icons/adobe-premiere-pro.svg" role="img" alt="" /> Premiere</li>
              <li> <img src="src/assets/static/icons/davinci.svg" role="img" alt="" /> DaVinci Resolve</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
