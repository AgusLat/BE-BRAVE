import React from 'react'
import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'


export const TASection4 = () => {

    const {data, loading} = useFetch('https://www.artstation.com/users/lamiracolo/projects.json')
    

  return (
    <div>

        <h1>{data?.data[0].title}</h1>
    </div>
  )
}
