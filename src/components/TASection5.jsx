import React from 'react'
import '../assets/css/theauthor.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'
import img1 from '../assets/static/img/project1.jpg'
import img2 from '../assets/static/img/project2.jpg'
import img3 from '../assets/static/img/project3.jpg'
import img4 from '../assets/static/img/project4.jpg'
import video1 from '../assets/static/video/Speedpaint1.mp4'



export const TASection5 = () => {

    const {language} = useContext(LangContext)

  return (
    <div className='ta-section5'>
        <div className='ta-section5-inner'>
            
            <p>{language==='es'?'Algunos proyectos anteriores que me ayudaron en el camino hacia "BE BRAVE".':'Some previous proyects that helped me on the way to "BE BRAVE"'}</p>

            <div className='ta-section5-inner-div2'>

                <div className='ta-section5-inner-div2-block block-position1' style={{backgroundImage: "url("+img1+")"}}>
                    <a href="https://www.artstation.com/artwork/lVwDXJ" target={'_blank'}>
                        <div className='ta-section5-linkdiv'>
                            <button>{language==='es'?'VER':'SEE'}</button>
                        </div>
                    </a>
                </div>
                <div className='ta-section5-inner-div2-block block-position2' style={{backgroundImage: "url("+img2+")"}}>
                    <a href="https://www.artstation.com/challenges/the-legend-of-king-arthur/categories/63/submissions/44741" target={'_blank'}>
                    <div className='ta-section5-linkdiv'>
                        <button>{language==='es'?'VER':'SEE'}</button>
                    </div>
                    </a>
                </div>
                <div className='ta-section5-inner-div2-block block-position2' style={{backgroundImage: "url("+img3+")"}}>
                    <a href="https://www.artstation.com/artwork/Z5ZwA0" target={'_blank'}>
                    <div className='ta-section5-linkdiv'>
                        <button>{language==='es'?'VER':'SEE'}</button>
                    </div>
                    </a>
                </div>
                <div className='ta-section5-inner-div2-block block-position2' style={{backgroundImage: "url("+img4+")"}}>
                    <a href="https://www.artstation.com/artwork/Ka05NB" target={'_blank'}>
                    <div className='ta-section5-linkdiv'>
                        <button>{language==='es'?'VER':'SEE'}</button>
                    </div>
                    </a>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}