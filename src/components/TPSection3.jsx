import React, { useContext, useState } from 'react'
import { LangContext } from '../context/langContext'

export const TPSection3 = () => {
  
  const {language} = useContext(LangContext)
  const [counter, setCounter] = useState(1)

  return (

    <div className='tpsection-container'>


    <div className='tpsection3'>
        <p>
        {language==='es'?'Una vez diseñado el personaje, comencé con el guión. Mi idea era un total de 40 - 50 ilustraciones. Algunas de ellas quedaron fuera del producto final y se agregaron otras que no estaban en el guión. ':'Once the character was designed, I started with the script. My idea was for a total of 40 - 50 illustrations. Some of them were left out of the final product and there were others added that weren\'t in the script.'} 
        </p>
        <p>
            {language==='es'?'En total son 70 vídeos, entre ilustraciones y texto.':'In total there are 70 videos, between illustrations and text. '}
        
        </p>
        <div className='tpsection3-inner1'>
        <button onClick={()=> counter <= 1? counter: setCounter(counter - 1)}> {'<'} </button>
        <img src={"/src/assets/static/img/script-"+counter+".png"} alt="" />
        <button onClick={()=> counter >= 5? counter: setCounter(counter + 1)}> {'>'} </button>
        </div>
        <div className='tpsection3-inner2'>
        <p onClick={()=> setCounter(1)} className={'dot '+ (counter==1?'selected':'')}>•</p>
        <p onClick={()=> setCounter(2)} className={'dot'+ (counter==2?' selected':'')}>•</p>
        <p onClick={()=> setCounter(3)} className={'dot'+ (counter==3?' selected':'')}>•</p>
        <p onClick={()=> setCounter(4)} className={'dot'+ (counter==4?' selected':'')}>•</p>
        <p onClick={()=> setCounter(5)} className={'dot'+ (counter==5?' selected':'')}>•</p>
        </div>
    </div>
    </div>
  )
}
