import React from 'react'
import '../assets/css/theprocess.css'
import { useContext } from 'react'
import { LangContext } from '../context/langContext'



export const TPSection1 = () => {

    const {language} = useContext(LangContext)

  return (

    <div className='tpsection-container'>
      <div className='tpsection1'>
        <div>
        <p>{language==='es'?'“BE BRAVE” nos cuenta la historia de Adair, un joven húsar de caballería del Reino de Aereann, que se ve obligado a marchar al frente; en una guerra liderada por el tiránico y ambicioso Rey Keveikrr II.':'"BE BRAVE" tells us the story of Adair, a young cavalry hussar from the Kingdom of Aereann, who is forced to march to the front; in a war led by the tyrannical and ambitious King Keveikrr II.'}</p>
        <p>
        {language==='es'?'A pesar del brutal castigo impuesto a los desertores, Adair buscará regresar a sus tierras para reencontrarse con su amada.':
        'Despite the brutal punishment imposed on the deserters, Adair will seek to return to his lands to reconnect with his beloved.'}
         </p>
        </div>
       <img src="/src/assets/static/img/Poster-TITLE.png" alt="" />
    </div>
    </div>
  )
}