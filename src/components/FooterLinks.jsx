import React from 'react'
import img1 from '../assets/static/logo/instagram-logo.png'
import img2 from '../assets/static/logo/artstation-logo.png'
import img3 from '../assets/static/logo/youtube-logo.png'


export const FooterLinks = () => {
  return (
    <ul className='footer-ul'>
        <li>
            <a href="https://www.instagram.com/lamiracolo/" target="_blank">
                <img className='logoimg' src={img1} alt="instagram logo" />
            </a>
        </li>
        <li>
            <a href="https://www.artstation.com/lamiracolo" target="_blank">
                <img className='logoimg' src={img2} alt="artstation logo" />
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/@lamiracolo6417" target="_blank">
                <img className='logoimg' src={img3} alt="youtube logo" />    
            </a>
        </li>
    </ul>
  )
}
