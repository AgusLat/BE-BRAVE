import React from 'react'
import "../../assets/css/parallax.css"


export const TitlePX = ({title, img}) => {
  return (
    <div className='title-container'>
        <h1>{title}</h1>
        <p>{title}</p>
        {/* <img id="title-img" className='mask-title' src={"src/assets/static/img/"+ img} alt="" /> */}
        <img id="title-img" className='mask-title' src={img} alt="" />
    </div>
  )
}
