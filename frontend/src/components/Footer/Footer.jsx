import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptate qui nihil saepe iste culpa illum ullam corporis itaque esse nam, odit labore temporibus cumque, ea similique nulla laboriosam! Et!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Compony</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delevery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+998900021505</li>
                    <li>Jovokhir@Tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-corpyright'>Copyright 2024 @ Uzbekistan.Tomato.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer