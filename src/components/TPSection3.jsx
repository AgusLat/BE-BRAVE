import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../context/langContext'
import img1 from '../assets/static/img/script-1.png'
import img2 from '../assets/static/img/script-2.png'
import img3 from '../assets/static/img/script-3.png'
import img4 from '../assets/static/img/script-4.png'
import img5 from '../assets/static/img/script-5.png'



export const TPSection3 = () => {
  
  const {language} = useContext(LangContext)
  const [counter, setCounter] = useState(1)
  const [carouselImg, setCarouselImg] = useState(img1)

  useEffect(() => {
    
    switch (counter) {
      case 1:
        setCarouselImg(img1)
        break;
      case 2:
        setCarouselImg(img2)
        break;
      case 3:
        setCarouselImg(img3)
        break;
      case 4:
        setCarouselImg(img4)
        break;
      case 5:
        setCarouselImg(img5)
        break;
      default:
        img1
        break;
    }
  
    
  }, [counter])
  

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
          <img src={carouselImg} alt="" />
          <button onClick={()=> counter >= 5? counter: setCounter(counter + 1)}> {'>'} </button>
        </div>

        <div className='tpsection3-inner2'>
          <p onClick={()=> setCounter(1)} className={'dot'+ (counter==1?' selected':'')}>•</p>
          <p onClick={()=> setCounter(2)} className={'dot'+ (counter==2?' selected':'')}>•</p>
          <p onClick={()=> setCounter(3)} className={'dot'+ (counter==3?' selected':'')}>•</p>
          <p onClick={()=> setCounter(4)} className={'dot'+ (counter==4?' selected':'')}>•</p>
          <p onClick={()=> setCounter(5)} className={'dot'+ (counter==5?' selected':'')}>•</p>
        </div>

      </div>
    </div>
  )
}
