import React, {useState, useEffect} from 'react'
import '../assets/css/theauthor.css'
import { TheAuthorMain } from '../components/TheAuthorMain'
import { LoadingScreen } from './LoadingScreen'



export default function TheAuthor() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
    
  }, [])
  

  return (
    <div id='the-author-container' className='wrapper'>
    {loading?<LoadingScreen />:<TheAuthorMain />}
    </div>
  )
}
