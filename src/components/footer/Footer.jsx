import React from 'react'
import './footer.css';

import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">BN</a>
      <ul className="parmalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Conatact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/biswajit.nath.754"><BsFacebook className='footer__socials-icon'/></a>
        <a href="https://www.linkedin.com/in/bnath9/"><BsLinkedin className='footer__socials-icon'/></a>
        <a href="https://github.com"><BsGithub className='footer__socials-icon'/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Biswajit Nath, All right servered.</small>
      </div>
    </footer>
  )
}

export default Footer