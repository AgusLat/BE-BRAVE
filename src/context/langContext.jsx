import React, { useState } from 'react'
import { createContext } from "react";

export const LangContext = createContext()


export default function LangContextProvider(props) {

  const [language, setLanguage] = useState('en')

  const data = {language, setLanguage}

  return (
    <LangContext.Provider value={data}>
        {props.children}
    </LangContext.Provider>
  )
}

//MODELO PARA PONER UN BOTON QUE CAMBIA EL IDIOMA:
//
//Importar el contexto a utilizar (LangContext, que sale de createContext()) y el metodo useContext()
//Creamos la constante donde almacenaremos nuestro useContext(LangContext)
//En este caso enviamos un state, por lo que guardamos el objeto desestructurado en {language, setLanguage}
//Podemos modificar el valor usando el useState()
//
// --------------------------------------------------
// import { LangContext } from '../context/langContext'
// import { useContext } from 'react'


// export default function langContext() {
//   const {language, setLanguage} = useContext(LangContext)
  
//   return (
//   <button onClick={()=>{language==='es'?setLanguage('en'):setLanguage('es')}}>
//     {language}
//   </button>
//   )
// }

// ----------------------------------------------------