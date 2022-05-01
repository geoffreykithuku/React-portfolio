import React from 'react'

import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

  const clients = [
    {
      img:profile1,
      review:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit",
    },
    {
      img:profile2,
      review:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit",
    },
    {
      img:profile3,
      review:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit",
    },
    {
      img:profile4,
      review:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor sit",
    }
  ]
  return (
    
      <div className="t-wrapper">
        <div className="t-heading">
          <span>Clients always get </span>
          <span>Exceptional Work </span>
          <span>from me</span>
          <div className='blur t-blur1' style={{background:'var(--purple)'}}></div>
          <div className='blur t-blur2' style={{background:'skyblue'}}></div>

          {/* slider */}
          <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination = {{clickable:true}}
          >
            {
              clients.map((client, index)=>{
              return(
              
                <SwiperSlide key={index}>
                  <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                  </div>
                 </SwiperSlide>
              );

              })
            }
            
          </Swiper>

        </div>
      </div>
      
   
  );
};

export default Testimonials
