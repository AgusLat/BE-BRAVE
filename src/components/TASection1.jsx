import React, { useContext } from 'react'
import { LangContext } from '../context/langContext'
import profileImg from '../assets/static/img/ProfilePic.jpg'
import img1 from '../assets/static/icons/adobe-photoshop.svg'
import img2 from '../assets/static/icons/adobe-after-effects.svg'
import img3 from '../assets/static/icons/adobe-audition.svg'
import img4 from '../assets/static/icons/adobe-indesign.svg'
import img5 from '../assets/static/icons/adobe-lightroom.svg'
import img6 from '../assets/static/icons/adobe-premiere-pro.svg'
import img7 from '../assets/static/icons/davinci.svg'


export const TASection1 = () => {

  const {language} = useContext(LangContext)

  return (
    <div className='ta-section1'>
        <div className='ta-section1-inner-div1'>
            <img id="profile-pic" src={profileImg} alt="" />
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
              <li> <img src={img1} role="img" alt="" /> Photoshop</li>
              <li> <img src={img2} role="img" alt="" />After Effects</li>
              <li> <img src={img3} role="img" alt="" /> Audition</li>
              <li> <img src={img4} role="img" alt="" /> InDesign</li>
              <li> <img src={img5} role="img" alt="" /> Lightroom</li>
              <li> <img src={img6} role="img" alt="" /> Premiere</li>
              <li> <img src={img7} role="img" alt="" /> DaVinci Resolve</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
