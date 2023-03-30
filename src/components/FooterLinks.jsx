import React from 'react'

export const FooterLinks = () => {
  return (
    <ul>
        <li>
            <a href="https://www.instagram.com/lamiracolo/" target="_blank">
                <img className='logoimg' src="/src/assets/static/logo/instagram-logo.png" alt="instagram logo" />
            </a>
        </li>
        <li>
            <a href="https://www.artstation.com/lamiracolo" target="_blank">
                <img className='logoimg' src="/src/assets/static/logo/artstation-logo.png" alt="artstation logo" />
            </a>
        </li>
        <li>
            <a href="" target="_blank">
                <img className='logoimg' src="/src/assets/static/logo/youtube-logo.png" alt="youtube logo" />    
            </a>
        </li>
    </ul>
  )
}
