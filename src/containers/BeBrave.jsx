import React, {useState, useEffect} from 'react'
import '../assets/css/bebrave.css'
import { BeBraveMain } from '../components/BeBraveMain'
import { LoadingScreen } from './LoadingScreen'

export default function BeBrave() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
    
  }, [])
  


  return (
    <div id="be-brave-container">
      {loading? <LoadingScreen/>:<BeBraveMain />}
    
    
    </div>
  )
}
