import React from 'react'
import '../assets/css/bebrave.css'
import { IframeContainer } from '../containers/IframeContainer'
import { TitleContainer } from '../containers/TitleContainer'
import backgroundImg from '../assets/static/img/23-Bright.png'

export const BeBraveMain = () => {
  return (
    <div id='be-brave-main' style={{backgroundImage: "url("+backgroundImg+")"}}>
        
            <TitleContainer />
            <IframeContainer />
        
    </div>
  )
}
