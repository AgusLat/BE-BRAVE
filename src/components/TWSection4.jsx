import React from 'react'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'



export const TWSection4 = () => {

  const {language} = useContext(LangContext)

  return (

<div className='twsection-container'>
    <div className='twsection'>
      <img className='mask' src="/src/assets/static/img/37-STOP.png" alt="" />
      <div className='twsection-innerdiv left'>
        <p>{language==='es'?'Pero estos monjes no se vinculan con el mundo. Son una secta respetada por lo que son capaces de hacer.':'But these monks do not connect with the world. They are a respected cult for what they are capable of doing.'}</p>
        <p className='aereann'>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0</p>
      <img className='mask sm-img' src="/src/assets/static/img/39-Gaze.png" alt="" />
      </div>
    </div>
</div>
  )
}
