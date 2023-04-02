import React from 'react'
import "../../assets/css/parallax.css"

export const BackgroundPX = ({img,id}) => {
  return (
    <div className='background-container'>
        <img id="background-img" src={img} alt="" />
    </div>
  )
}
