import React from 'react'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'
import langIcon from '../assets/static/icons/lang.png'


export const LangButton = () => {

    const {language, setLanguage} = useContext(LangContext)

  return (
    <button id='lang-btn' onClick={()=>{language==='es'?setLanguage('en'):setLanguage('es')}}>
      <img id='lang-icon' src={langIcon}/>{language.toUpperCase()}
    </button>
  )
}
