import React from 'react'
import '../assets/css/theworld.css'
import { BackgroundPX } from './parallax-components/BackgroundPX'
import { SectionPX } from './parallax-components/SectionPX'
import { TitlePX } from './parallax-components/TitlePX'
import backgroundImg from '../assets/static/img/1-Luna.png'
import titleImg from '../assets/static/img/38-Procession.png'

export const TheWorldMain = () => {

   

  return (
    <div className='the-world-main reference-plane'>
      {/* todos los MAIN deberian ir asi */}
          <BackgroundPX img={backgroundImg}/>
          <TitlePX img={titleImg} title="THE WORLD"/>
          <SectionPX id="1" section="TW" />
          <SectionPX id="2" section="TW" />
          <SectionPX id="3" section="TW" />
          <SectionPX id="4" section="TW" />
          <SectionPX id="5" section="TW" />
    </div>
  )
}
