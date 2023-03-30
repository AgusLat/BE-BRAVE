import React from 'react'
import '../assets/css/theauthor.css'
import { BackgroundPX } from './parallax-components/BackgroundPX'
import { SectionPX } from './parallax-components/SectionPX'
import { TitlePX } from './parallax-components/TitlePX'


export const TheAuthorMain = () => {
  return (
    <div className='the-author-main reference-plane'>
      {/* todos los MAIN deberian ir asi */}
          <BackgroundPX img="1-Luna.png"/>
          <TitlePX img="8-Adair.png" title="THE AUTHOR"/>
          <SectionPX id="1" section="TA" />
          <SectionPX id="2" section="TA" />
          <SectionPX id="3" section="TA" />
          <SectionPX id="1" section="TA" />
          <SectionPX id="1" section="TA" />
    </div>
  )
}
