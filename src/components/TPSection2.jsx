import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'
import backgroundImg1 from '../assets/static/img/Adair1.jpg'
import backgroundImg2 from '../assets/static/img/Adair2.jpg'
import backgroundImg3 from '../assets/static/img/Adair3.jpg'
import img1 from '../assets/static/img/Adair4.jpg'



export const TPSection2 = ({section}) => {

    const {language} = useContext(LangContext)
    const [animation, setAnimation] = useState('')
    
     useEffect(() => {
        
         console.log('useEffect')
         setAnimation('animation-adair')

    
    }, [])
  

  return (

    <div className='tpsection-container'>

      <div className='tpsection2'>
        <div className={'tpsection2-inner1 ' + animation + ' mobile-not-active'} >
            <img src={backgroundImg1} loading="lazy" alt="" />
        </div>

        <div className='tpsection2-inner2'>
          <p>{language==='es'?'Cuando diseñé el personaje de Adair, quería que fuera un hombre normal en términos de belleza. Con imperfecciones en todos los aspectos, y un fuerte debate moral y de convicciones.':'When designing Adair\'s character, I wanted him to be a normal man in terms of beauty. With imperfections in all aspects, and a strong moral debate and convictions.'}</p>
          <div className={'tpsection2-inner1-mobile ' + animation} >
            <img src={backgroundImg1} loading="lazy" alt="" />
            <img src={backgroundImg2} loading="lazy" alt="" />
            <img src={backgroundImg3} loading="lazy" alt="" />
          </div>
          <button className='tpsection2-mobile-btn' onClick={()=>{ animation===''? setAnimation('animation-adair'):setAnimation('')}}>
            {animation===''?'PLAY':'STOP'} 
          </button>
          <p>{language==='es'?'Por otro lado, pertenece a una clase social alta del Reino de Aereann. Orgulloso y dominante.':'On the other hand, he belongs to a high social class from the Kingdom of Aereann. Proud and dominant.'}</p>
          <button className='tpsection2-btn mobile-not-active' onClick={()=>{ animation===''? setAnimation('animation-adair'):setAnimation('')}}>
            {animation===''?'PLAY':'STOP'} 
          </button>
      </div>
        
      <div className='tpsection2-inner3'>
        <img src={img1} loading="lazy" alt="" />
        <p>{language==='es'?'Es un Húsar, una unidad de caballería ligera muy prestigiosa en su nación. Para crear su uniforme, me inspiré en las unidades francesas y británicas de principios del siglo XIX.':'He is a Hussar, a very prestigious light cavalry unit in his nation. To create his uniform, I was inspired by French and British units from the early 1800s.'}</p>
      </div>

      </div>
    </div>
  )
}
