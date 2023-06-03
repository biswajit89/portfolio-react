import React from 'react'
import './about.css';
import about from '../../assets/about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>5+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className="about__card">
                <AiTwotoneFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>10 + live</small>
              </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem praesentium, molestias, soluta ea hic saepe aspernatur in quae, labore necessitatibus illo voluptatibus amet iste omnis provident? Voluptates sequi repudiandae sunt ab doloribus. Doloremque, sint a quod veniam incidunt velit officia autem sed, minus rerum, recusandae soluta saepe architecto excepturi.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About