import React from 'react'
import '../assets/css/theprocess.css'
import { BackgroundPX } from './parallax-components/BackgroundPX'
import { SectionPX } from './parallax-components/SectionPX'
import { TitlePX } from './parallax-components/TitlePX'
import backgroundImg from '../assets/static/img/15-Water.png'
import titleImg from '../assets/static/img/25-Mud.png'

export const TheProcessMain = () => {
  return (
    <div className='the-process-main reference-plane'>
    {/* todos los MAIN deberian ir asi */}
        <BackgroundPX img={backgroundImg}/>
        <TitlePX img={titleImg} title="THE PROCESS"/>
        <SectionPX id="1" section="TP" />
        <SectionPX id="2" section="TP" />
        <SectionPX id="3" section="TP" />
        <SectionPX id="4" section="TP" />
        
  </div>
  )
}
