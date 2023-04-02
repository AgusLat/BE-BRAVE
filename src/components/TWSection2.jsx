import React from 'react'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'
import img1 from "../assets/static/img/27-In-the-woods.png"
import img2 from "../assets/static/img/7-First-Light.png"




export const TWSection2 = () => {

  const {language} = useContext(LangContext)

  return (
    <div className='twsection-container'>

    <div className='twsection'>
        <img className='mask' src={img1} alt="" />
        <div className='twsection-innerdiv right'>
          <p>{language==='es'?'Su atmósfera es de una belleza oscura y fluctuá entre colores cálidos que representan al país invadido, con clima árido y hostil, y fríos en momentos donde el personaje tiene un leve respiro o poco a poco se va acercando a su lugar de origen…':'Its atmosphere is darkly beautiful and fluctuates between warm colors representing an invaded country, with an arid and hostile nature, and cold when the character takes a slight breathe or gradually gets closer to his place of origin ...'}</p>
          <img className='mask sm-img' src={img2} alt="" />
        </div>
           
    </div>
    </div>
  )
}
