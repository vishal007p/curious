import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss"

import { Autoplay } from "swiper";


const LogoImg = [
 
    {
        id: 2,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-27-473x356.png'
    },
    
    {
        id: 3,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-29-439x473.png'
    },
    
   
    {
        id: 6,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-32-473x473.png'
    },
    
    {
        id: 7,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-35-468x473.png'
    },
    
    {
        id: 8,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },


    
    {
        id: 2,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-27-473x356.png'
    },
    
    {
        id: 3,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-29-439x473.png'
    },
    
    {
        id: 4,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-30-473x434.png'
    },
    
    {
        id: 5,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },
    
    {
        id: 6,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-32-473x473.png'
    },
    
    {
        id: 7,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-35-468x473.png'
    },
    
    {
        id: 8,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },
    
    

    
    {
        id: 2,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-27-473x356.png'
    },
    
    {
        id: 3,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-29-439x473.png'
    },
    
    {
        id: 4,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-30-473x434.png'
    },
    
    {
        id: 5,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },
    
    {
        id: 6,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-32-473x473.png'
    },
    
    {
        id: 7,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-35-468x473.png'
    },
    
    {
        id: 8,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },


     
    {
        id: 2,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-27-473x356.png'
    },
    
    {
        id: 3,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-29-439x473.png'
    },
    
    {
        id: 4,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-30-473x434.png'
    },
    
    {
        id: 5,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },
    
    {
        id: 6,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-32-473x473.png'
    },
    
    {
        id: 7,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-35-468x473.png'
    },
    
    {
        id: 8,
        img: 'https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg'
    },
    
   
    

    

]

const LogoSlider = () => {
    return <>
    
            <Swiper
            spaceBetween={30}
            slidesPerView={8}
            speed={1000}
            loop={true}
          
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter:true,
                
            }}
          
           
            allowTouchMove={false}
        
            modules={[Autoplay]}
            className="mySwiper"
            key={LogoImg.id}
            
           
        >
 
            {
               LogoImg.map((img ,i)=>{
                return(
                    <SwiperSlide key={i}><img src={img.img} alt="" srcset="" /></SwiperSlide>
                )
               }) 
            }
         

        </Swiper>
       
  
       
    </>
}


export default LogoSlider;