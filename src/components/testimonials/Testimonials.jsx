import React from 'react'
import './testimonials.css';
import img from '../../assets/about.jpeg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    id: 1, 
    name: "Rahul",
    avatar: img,
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo et modi reprehenderit, eligendi sapiente delectus reiciendis exercitationem sunt enim ab ipsam distinctio doloremque cupiditate. Adipisci modi repellat amet consectetur."
  },
  {
    id: 1, 
    name: "Rahul",
    avatar: img,
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo et modi reprehenderit, eligendi sapiente delectus reiciendis exercitationem sunt enim ab ipsam distinctio doloremque cupiditate. Adipisci modi repellat amet consectetur."
  },
  {
    id: 1, 
    name: "Rahul",
    avatar: img,
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo et modi reprehenderit, eligendi sapiente delectus reiciendis exercitationem sunt enim ab ipsam distinctio doloremque cupiditate. Adipisci modi repellat amet consectetur."
  },
  {
    id: 1, 
    name: "Rahul",
    avatar: img,
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo et modi reprehenderit, eligendi sapiente delectus reiciendis exercitationem sunt enim ab ipsam distinctio doloremque cupiditate. Adipisci modi repellat amet consectetur."
  },
  {
    id: 1, 
    name: "Rahul",
    avatar: img,
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo et modi reprehenderit, eligendi sapiente delectus reiciendis exercitationem sunt enim ab ipsam distinctio doloremque cupiditate. Adipisci modi repellat amet consectetur."
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonals__container">
       {
        data.map(({id, name, avatar, review}, index) => {
          return (
            <SwiperSlide className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" className="client__avatar-image" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
          )
        })
       }    
      </Swiper>
    </section>
  )
}

export default Testimonials