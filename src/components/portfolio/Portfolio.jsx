import React from 'react'
import './portfolio.css';
import img from '../../assets/me.jpeg'

const data = [
  {
    id: 1, 
    image: img,
    title: "Some title of the project goes here",
    github: "https://github.com",
    demo:"dribbble.com"
  },
  {
    id: 2, 
    image: img,
    title: "Some title of the project goes here",
    github: "https://github.com",
    demo:"dribbble.com"
  },
  {
    id: 3, 
    image: img,
    title: "Some title of the project goes here",
    github: "https://github.com",
    demo:"dribbble.com"
  },
  {
    id: 4, 
    image: img,
    title: "Some title of the project goes here",
    github: "https://github.com",
    demo:"dribbble.com"
  },
  {
    id: 5, 
    image: img,
    title: "Some title of the project goes here",
    github: "https://github.com",
    demo:"dribbble.com"
  },
  {
    id: 6, 
    image: img,
    title: "Some title of the project goes here",
    github: "https://github.com",
    demo:"dribbble.com"
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image,title, github, demo}) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Dribbble</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio