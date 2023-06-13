import React from 'react'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'
import img1 from '../assets/static/icons/adobe-photoshop.svg'
import img2 from '../assets/static/icons/adobe-after-effects.svg'
import img3 from '../assets/static/icons/adobe-audition.svg'
import img4 from '../assets/static/icons/adobe-indesign.svg'
import img5 from '../assets/static/icons/adobe-lightroom.svg'
import img6 from '../assets/static/icons/adobe-premiere-pro.svg'
import img7 from '../assets/static/icons/davinci.svg'


export const TASection2 = () => {

    
  const {language} = useContext(LangContext)

  return (
    <div className='ta-section2'>

      <div className='ta-section2-inner'>
        <div className='ta-section2-inner-div1'>
        <p>
        {language==='es'?'"BE BRAVE" fue el resultado de mi busqueda para sobrepasar los límites que tenia en ese momento con respecto a mis trabajos. Un antes y despues en mi carrera.':'"BE BRAVE" was the product of my search to overcome the limits that at that time I had regarding my works. The before and after in my career.'}</p>
        

        </div>
        <div className='ta-section2-inner-div2'>

          <div className='ta-section2-list-div'>
            <h2>SOFTWARE</h2>
              <ul>
                  <li> <img src={img1} role="img" alt="" /> Photoshop</li>
                  <li> <img src={img2} role="img" alt="" /> After Effects</li>
                  <li> <img src={img3} role="img" alt="" /> Audition</li>
                  <li> <img src={img4} role="img" alt="" /> InDesign</li>
                  <li> <img src={img5} role="img" alt="" /> Lightroom</li>
                  <li> <img src={img6} role="img" alt="" /> Premiere</li>
                  <li> <img src={img7} role="img" alt="" /> DaVinci Resolve</li>
              </ul>  
          </div>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WwYBNR_zMPs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
          
        </div>
        <p>{language==='es'?'Nuevos proyectos vendrán con el paso del tiempo, quizás una posible segunda parte de esta historia, pero este fue mi punto de partida hacia algo mejor.':'New works will come over time, even a possible second part of this story, but this was my starting point towards something better.'}</p>
      </div>
    </div>
  )
}
