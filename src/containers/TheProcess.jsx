import React, {useEffect, useState} from 'react'
import '../assets/css/theprocess.css'
import { TheProcessMain } from '../components/TheProcessMain'
import { LoadingScreen } from './LoadingScreen'


export default function TheProcess() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
    
  }, [])

  return (
    <div id="the-process-container" className='wrapper'>
    {loading? <LoadingScreen/>:<TheProcessMain />}
    </div>
   
  )
}
