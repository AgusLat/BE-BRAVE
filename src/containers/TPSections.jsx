import React from 'react'
import { TPSection1 } from '../components/TPSection1'
import { TPSection2 } from '../components/TPSection2'
import { TPSection3 } from '../components/TPSection3'
import { TPSection4 } from '../components/TPSection4'

export const TPSections = ({section}) => {
  return (
    <div className='tpsections'>
        {section==='1'&&<TPSection1 />}
        {section==='2'&&<TPSection2 />}
        {section==='3'&&<TPSection3 />}
        {section==='4'&&<TPSection4 />}

    </div>
  )
}
