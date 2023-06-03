import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__social">
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://linkedin.com" target="_blank"><BsGithub/></a>
        <a href="http://linkedin.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials