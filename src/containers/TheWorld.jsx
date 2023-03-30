import React, {useState, useEffect} from 'react'
import '../assets/css/theworld.css'
import { TheWorldMain } from '../components/TheWorldMain'

import { LoadingScreen } from './LoadingScreen'

export default function TheWorld() {

  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    setLoading(true)
  
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
    
  }, [])
  

  return (
    //WRAPPER
    <div id="the-world-container">
     {loading? <LoadingScreen/>:<TheWorldMain />}
     
    </div>
  )
}
