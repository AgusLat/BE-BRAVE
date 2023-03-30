import React from 'react'
import '../assets/css/theworld.css'
import { TWSection1 } from '../components/TWSection1'
import { TWSection2 } from '../components/TWSection2'
import { TWSection3 } from '../components/TWSection3'
import { TWSection4 } from '../components/TWSection4'
import { TWSection5 } from '../components/TWSection5'

export const TheWorldSections = ({id}) => {

  return (
    <div className='the-world-sections'>
        {id==='1'&&<TWSection1 />}
        {id==='2'&&<TWSection2 />}
        {id==='3'&&<TWSection3 />}
        {id==='4'&&<TWSection4 />}
        {id==='5'&&<TWSection5 />}

    </div>
  )
}
