import React from 'react'
import '../assets/css/LoadingScreen.css'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'



export const LoadingScreen = () => {

  const {language} = useContext(LangContext)

  return (
    <div id='loading-screen-container'>

        <h1 id='loading-title'>{language==='en'?'LOADING':'CARGANDO'}</h1>
    </div>
  )
}
