import React from 'react'
import '../assets/css/bebrave.css'
import { IframeContainer } from '../containers/IframeContainer'
import { TitleContainer } from '../containers/TitleContainer'

export const BeBraveMain = () => {
  return (
    <div id='be-brave-main'>
        
            <TitleContainer />
            <IframeContainer />
        
    </div>
  )
}
