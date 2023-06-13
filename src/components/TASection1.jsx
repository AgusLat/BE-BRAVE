import React, { useContext } from 'react'
import { LangContext } from '../context/langContext'
import profileImg from '../assets/static/img/ProfilePic.jpg'
import icon1 from '../assets/static/icons/location-pin.png'
import icon2 from '../assets/static/icons/link.png'



export const TASection1 = () => {

  const {language} = useContext(LangContext)

  return (
    <div className='ta-section1'>
      <div className='ta-section1-inner'>       
        <div className='ta-section1-inner-div1'>
            <img id="profile-pic" src={profileImg} alt="" />
        </div>
        <div className='ta-section1-inner-div2'>
          
            <h1>Luciano A. Miracolo</h1>
            <p>
              Illustrator & Concept Artist <br />
             <img src={icon1} alt="" /> Buenos Aires, Argentina<br />
              <a href="https://www.artstation.com/lamiracolo" target={'_blank'}>
                <img src={icon2} alt="" /> lamiracolo.artstation.com</a>
            </p>                     
        </div>     
      </div>
    </div>
  )
}
