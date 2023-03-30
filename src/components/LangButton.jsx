import React from 'react'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'


export const LangButton = () => {

    const {language, setLanguage} = useContext(LangContext)

  return (
    <button id='lang-btn' onClick={()=>{language==='es'?setLanguage('en'):setLanguage('es')}}><img id='lang-icon' src='/src/assets/static/icons/lang.png'/>{language.toUpperCase()}</button>
  )
}
