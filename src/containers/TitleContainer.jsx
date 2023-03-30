import React from 'react'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'


export const TitleContainer = () => {

  const {language, setLanguage} = useContext(LangContext)

  return (
    <div id='title-container'>
        <h1 id='be-brave-title'>BE BRAVE</h1>
        <q id='be-brave-subtitle'>{language === 'es'?'...Se testigo, y no mires atrás...':'...Be a witness, and don\'t look back...'}</q>
      
    </div>
  )
}
