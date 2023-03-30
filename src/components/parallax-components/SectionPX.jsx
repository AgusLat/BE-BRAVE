import React from 'react'
import "../../assets/css/parallax.css"
import { TASection1 } from '../TASection1'
import { TASection2 } from '../TASection2'
import { TWSection1 } from '../TWSection1'
import { TWSection2 } from '../TWSection2'
import { TWSection3 } from '../TWSection3'
import { TWSection4 } from '../TWSection4'
import { TWSection5 } from '../TWSection5'
import { TPSection1 } from '../TPSection1'
import { TPSection2 } from '../TPSection2'
import { TPSection3 } from '../TPSection3'
import { TPSection4 } from '../TPSection4'
import { TASection3 } from '../TASection3'

export const SectionPX = ({id, section}) => {
  return (
    <div className='sections-container'>
        
        {id==='1'&& section==="TW" &&<TWSection1 />}
        {id==='2'&& section==="TW" &&<TWSection2 />}
        {id==='3'&& section==="TW" &&<TWSection3 />}
        {id==='4'&& section==="TW" &&<TWSection4 />}
        {id==='5'&& section==="TW" &&<TWSection5 />}

        {id==='1'&& section==="TP" &&<TPSection1 />}
        {id==='2'&& section==="TP" &&<TPSection2 />}
        {id==='3'&& section==="TP" &&<TPSection3 />}
        {id==='4'&& section==="TP" &&<TPSection4 />}
        
        {/* SECCIONES QUE SE VERIAN ASI
        */}
        {id==='1'&& section==="TA" && <TASection1 /> }
        {id==='2'&& section==="TA" && <TASection2 /> }
        {id==='3'&& section==="TA" && <TASection3 /> }

      
    </div>
  )
}
