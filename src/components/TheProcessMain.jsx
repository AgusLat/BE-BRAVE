import React from 'react'
import '../assets/css/theprocess.css'
import { BackgroundPX } from './parallax-components/BackgroundPX'
import { SectionPX } from './parallax-components/SectionPX'
import { TitlePX } from './parallax-components/TitlePX'


export const TheProcessMain = () => {
  return (
    <div className='the-process-main reference-plane'>
    {/* todos los MAIN deberian ir asi */}
        <BackgroundPX img="15-Water.png"/>
        <TitlePX img="25-Mud.png" title="THE PROCESS"/>
        <SectionPX id="1" section="TP" />
        <SectionPX id="2" section="TP" />
        <SectionPX id="3" section="TP" />
        <SectionPX id="4" section="TP" />
        
  </div>
  )
}
