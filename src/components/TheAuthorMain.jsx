import React from 'react'
import '../assets/css/theauthor.css'
import { BackgroundPX } from './parallax-components/BackgroundPX'
import { SectionPX } from './parallax-components/SectionPX'
import { TitlePX } from './parallax-components/TitlePX'
import backgroundImg from '../assets/static/img/1-Luna.png'
import titleImg from '../assets/static/img/8-Adair.png'


export const TheAuthorMain = () => {
  return (
    <div className='the-author-main reference-plane'>
      {/* todos los MAIN deberian ir asi */}
          <BackgroundPX img={backgroundImg}/>
          <TitlePX img={titleImg} title="THE AUTHOR"/>
          <SectionPX id="1" section="TA" />
          <SectionPX id="2" section="TA" />
          <SectionPX id="3" section="TA" />
          {/* <SectionPX id="1" section="TA" />
          <SectionPX id="1" section="TA" /> */}
    </div>
  )
}
