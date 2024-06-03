import React from 'react'
import {SiWhatsapp} from "react-icons/si"
import {BiLogoFacebook,BiLogoInstagram} from 'react-icons/bi'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__content container">
        <h3 className='footer__logo'>Mau Desings</h3>
            <div className='footer__social'>
                <SiWhatsapp className='footer__icon' />
                <BiLogoFacebook className='footer__icon' />
                <BiLogoInstagram className='footer__icon' />
            </div>
        </div>
    </div>
  )
}

export default Footer
