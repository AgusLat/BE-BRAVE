import React from 'react'
import '../assets/css/theauthor.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'
import img1 from '../assets/static/img/orleans2.jpg'
import video1 from '../assets/static/video/Speedpaint1.mp4'
import video2 from '../assets/static/video/Speedpaint2.mp4'


export const TASection3 = () => {

    const {language} = useContext(LangContext)

  return (
    <div className='ta-section3'>
        <div className='ta-section3-inner'>
            <div className='ta-section3-inner-div1'>
                <p>{language==='es'?'Directores como Sam Mendes, Christopher Nolan, Steven Spielberg, etc., han sido una gran referencia para mi trabajo y la forma de crear escenas de nivel cinematográfico que hablen por si solas.':'Directors like Sam Mendes, Christopher Nolan, Steven Spielberg, etc., have been a great reference for my work and the way to create cinematographic level scenes that speak for themselves.'}</p>
                <img src={img1} alt="" />

            </div>
            <div className='ta-section3-inner-div2'>
                <video controls >
                    <source src={video1} type='video/mp4'/>
                </video>
                <video controls >
                    <source src={video2} type='video/mp4'/>
                </video>
            </div>
        </div>
    </div>
  )
}
