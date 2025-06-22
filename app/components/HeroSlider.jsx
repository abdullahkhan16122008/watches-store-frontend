"use client"
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HeroSlider = () => {
  let right = '>'
  let left = '<'
  useEffect(() => {
    AOS.init({ once: false });
  })
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='absolute top-[50%] px-[12px] max-sm:scale-[0.80] text-white backdrop-brightness-60 content-center right-[0%] text-5xl py-[25px]' onClick={onClick}>
        {right}
      </div>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className='absolute backdrop-brightness-60 max-sm:scale-[0.80] z-2 top-[50%] text-white text-5xl left-[0%] px-[12px] py-[25px]' onClick={onClick}>
        {left}
      </div>
    )
  }


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };
  return (
    <div>
      <Slider {...settings}>
        <div className='bg-[100% 100%] max-md:bg-cover max-md:bg-center bg-[url(/men.webp)]'>
        <div className="bgb px-[102px] max-md:px-[64px] h-[80vh] content-center items-center max-md:backdrop-brightness-60">
          <div className="leftSideHero w-[40%] max-xl:w-full text-center">
            <div className="subHead text-red-500 text-3xl font-serif my-3" data-aos='fade-down'>Fasion Sale</div>
            <div className="Head text-5xl max-sm:text-3xl text-black max-md:text-gray-100 font-medium font-sans" data-aos='zoom-in'>Minimal Menz Style</div>
            <div className='text-gray-800 max-md:text-gray-100 my-3' data-aos='fade-up'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi molestias deleniti, ad tempore quo vero iure reiciendis perspiciatis nemo.</div>
            <button className='bg-black border-black px-[30px] my-4 duration-300 py-[10px] border-2 text-white font-medium max-sm:scale-[0.80] hover:bg-white hover:text-black' data-aos='fade-up'>Shop Now</button>
          </div>
          </div>
        </div>

        <div className='bg-[100% 100%] max-md:bg-cover bg-[url(/women.webp)]'>
        <div className="bgb px-[102px] max-md:px-[64px] h-[80vh] content-center items-center max-md:backdrop-brightness-60">
          <div className="leftSideHero w-[40%] max-xl:w-full float-right text-center">
            <div className="subHead text-red-500 text-3xl font-serif my-3" data-aos='fade-down'>Fasion Sale</div>
            <div className="Head text-5xl max-sm:text-3xl font-medium text-black max-md:text-gray-100 font-sans" data-aos='zoom-in'>Minimal Menz Style</div>
            <div className='text-gray-800 my-3 max-md:text-gray-100' data-aos='fade-up'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi molestias deleniti, ad tempore quo vero iure reiciendis perspiciatis nemo.</div>
            <button className='bg-black px-[30px] border-black my-4 duration-300 py-[10px] border-2 text-white font-medium max-sm:scale-[0.80] hover:bg-white hover:text-black' data-aos='fade-up'>Shop Now</button>
          </div>
        </div>
        </div>
      </Slider>
    </div>
  )
}

export default HeroSlider
