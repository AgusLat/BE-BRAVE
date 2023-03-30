import React from 'react'
import '../assets/css/theworld.css'
import { LangContext } from '../context/langContext'
import { useContext } from 'react'



export const TWSection5 = () => {

  const {language} = useContext(LangContext)

  return (

    <div className='twsection-container'>
      <div className='twsection'>   
        <img className='mask' src="/src/assets/static/img/45-Beach.png" alt="" />
        <div className='twsection-innerdiv right'>
          <p>{language==='es'?'Por ultimo, el enemigo en esta historia no aparece, esta oculto y se sabe poco. La idea es que sepas que el verdadero enemigo no eran los Surennos, sino el propio Adair (el protagonista) con si mismo.' :'Finally, the enemy in this story does not appear, it is hidden and little is known. The idea is that you know that the real enemy was not the Surennos, but Adair (the protagonist) with himself.'}</p>
          <p>{language==='es'?'Es una historia que pretende realismo en sentido a emociones y sentimientos humanos. Adair no es ningún príncipe, nadie famoso o figura reconocida. Simplemente alguien que formaba parte de una elite de caballería, un Husar, sintió el miedo y huyo. Una emoción muy humana, desagradable a la vista de algunos, pero humana al fin.' :'It is a story that seeks for realism in the sense of human emotions and feelings. Adair is not a prince, nor famous or recognized. Just someone who was part of an elite cavalry, a Hussar, got scared and ran away. A very human emotion, unpleasant in the eyes of some, but human nonetheless.'}</p>
          <p>{language==='es'?'Queda en uno si hizo lo correcto o no...' :'It is up to you if he did the right thing or not...'}</p>
        </div>
      </div>
    </div>
    
  )
}
