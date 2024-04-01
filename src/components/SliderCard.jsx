import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import SliderImg1 from '../assets/images/slider_img_01.png'
import SliderImg2 from '../assets/images/slider_img_02.png'
import SliderImg3 from '../assets/images/slider_img_03.png'
import SliderImg4 from '../assets/images/slider_img_04.png'
import { DarkModeContext } from "../context";

const SliderCard = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { img: SliderImg1, heading:"ESG" , text: "Lorem ipsum dolor sit amet consectetur. Lobortis tempor enim libero risus nulla. " },
    { img: SliderImg3, heading:"Wealth Management" , text: "ellus amet at aliquet auctor id vitae non amet tincidunt.  " },
    { img: SliderImg1, heading:"Investment Management" , text: "Consequat cursus vitae sed amet elementum malesuada. A ac vitae at nulla a laoreet proin vel sed." }
  ];

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    autoplay: true,
    arrows: false,
  autoplaySpeed: 2000,
    centerPadding: '60px',
    afterChange: (current) => current===2 ? setCurrentSlide(0) : setCurrentSlide(current+1),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    
  };

  return (
    <div className="slider-container px-4 md:0">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`${currentSlide === index ? " md:active" : "md:unActive"}`}>
            <img src={slide.img} alt="slider" />
            <div className="text-below">
               <h1 className={`font-bold px-2 text-xl ${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`}>{slide.heading}</h1>
               <p className={`mt-2 text-center px-2 ${darkMode ? "text-[#fff]" : "text-[#2C2C2C]"}`}>{slide.text}</p>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
