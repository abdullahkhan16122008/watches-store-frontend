"use client"
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from 'react-redux'
import { addCart, removeCart } from '../redux/cart/cartSlice';



const FeaturedProducts = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    AOS.init({once: false})
  },[])
  
  let products = [
    {_id:1,title:'Arabic Aura Watch',description:'sdnakljda',quantity: 1,color:'black',price:20,img:'https://shopera.pk/cdn/shop/files/Arabicaura1.webp?v=1746956289'},
    {_id:2,title:'Rado watch',description:'sdnakljda',quantity: 1,color:'silver',price:60,img:'https://tusslehub.com/cdn/shop/files/74D5908B-86D8-4FF0-A261-F168581AE3FD.jpg?v=1733666830'},
    {_id:3,title:'Black blue watch',description:'sdnakljda',quantity: 1,color:'black',price:20,img:'https://img.drz.lazcdn.com/static/pk/p/54a01e0b867efd8a3d614611241f388b.jpg_960x960q80.jpg_.webp'},
    {_id:4,title:'Apple red Watch',description:'sdnakljda',quantity: 1,color:'silver',price:60,img:'https://cufflinkdeals.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/06/11064359/Fashion-Mens-Business-Black-Watches-Luxury-Stainless-Steel-Ultra-Thin-Mesh-Belt-Quartz-Men-Wrist-Watch-1.jpg'},
    {_id:5,title:'Redo couple watch',description:'sdnakljda',quantity: 1,color:'black',price:20,img:'https://img.drz.lazcdn.com/g/kf/S3a38ec3d1870401bbcc164a424f3e0dct.jpg_720x720q80.jpg'},
    {_id:6,title:'White matte watch',description:'sdnakljda',quantity: 1,color:'silver',price:60,img:'https://7star.pk/wp-content/uploads/2024/09/115.0695.3.001.jpg'},
  ]

  let NextArrow = (props) => {
    let { onClick } = props
    let right = '>'
    return (
      <>
      <div className='w-[64px] h-[64px] bg-white duration-150 hover:bg-black text-black hover:text-white font-bold text-2xl text-center content-center items-center absolute z-10 top-[40%] right-[20px] px-2 py-2' onClick={onClick}>{right}</div>
      </>
    )
  }
  let PrevArrow = (props) => {
    let { onClick } = props
    let left = '<'
    return (
      <>
      <div className='w-[64px] h-[64px] bg-white duration-150 hover:bg-black text-black hover:text-white font-bold text-2xl text-center content-center items-center absolute z-10 top-[40%] left-[20px] px-2 py-2' onClick={onClick}>{left}</div>
      </>
    )
  }

  let handleNavigate = () => {}

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='overflow-hidden my-10 px-[32px]'>
      <h1 className='my-9 text-5xl font-medium text-center'>Featured Products 🔥</h1>
      <Slider {...settings}>

      {products.map((item)=>(
        <div className='h-[550px] border-7 border-white outline-none' key={item._id} data-aos='fade-up' onClick={handleNavigate}>

        <img src={item.img} alt="" className='h-[370px] w-full' data-aos='zoom-in' />
        <div className="my-3 text-center">
          <h1 className='font-medium text-2xl' data-aos='fade-up'>{item.title}</h1>
          <h1 className='font-medium text-green-700 my-2 text-xl'>${item.price}</h1>
          <button className='bg-black border-black px-[30px] my-4 duration-300 py-[10px] border-2 text-white font-medium hover:bg-white hover:text-black' onClick={()=> dispatch(addCart(item))}>Add to Cart</button>
          </div>
      </div>
      ))}
      </Slider>
    </div>
  )
}

export default FeaturedProducts;