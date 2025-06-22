"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const FeaturedCollection = () => {
  
    useEffect(()=>{
      AOS.init({once: false})
    },[])

  return (
    <div className='my-10'>
        <h1 className='my-10 text-5xl font-serif text-center'>Featured Collections 🔥</h1>
        <ul className='justify-around flex flex-wrap px-[128px] max-md:px-[32px]'>

        <li data-aos='zoom-in' className="card bg-[url(/collection1.webp)] hover:scale-[1.02] duration-300 max-xl:my-4 overflow-hidden bg-[100% 100%] w-[400px] max-md:w-full h-[350px] content-end">
        <div className='text-white text-xl font-bold w-[400px] max-md:w-full hide duration-300 mb-2 border-none py-3 text-center'>
            <h1>
            Men's Watches
            </h1>
            <div className='text-yellow-200 font-light show duration-600 text-sm'>Order Now</div>
            </div>
            <div className='box-shadow w-full'></div>
        </li>

        <li data-aos='zoom-in' className="card bg-[url(/collection2.webp)] hover:scale-[1.02] duration-300 max-xl:my-4 overflow-hidden bg-[100% 100%] w-[400px] max-md:w-full h-[350px] content-end">
        <div className='text-white text-xl font-bold w-[400px] max-md:w-full hide duration-300 mb-2 border-none py-3 text-center'>
            <h1>
            Women's Watches
            </h1>
            <div className='text-yellow-200 font-light show duration-600 text-sm'>Order Now</div>
            </div>
            <div className='box-shadow w-full'></div>
        </li>

        <li data-aos='zoom-in' className="card bg-[url(/collection3.webp)] hover:scale-[1.02] duration-300 max-xl:my-4 overflow-hidden bg-[100% 100%] w-[400px] max-md:w-full h-[350px] content-end">
        <div className='text-white text-xl font-bold w-[400px] hide max-md:w-full duration-300 mb-2 border-none py-3 text-center'>
            <h1>
            Baby Watches
            </h1>
            <div className='text-yellow-200 font-light show duration-600 text-sm'>Order Now</div>
            </div>
            <div className='box-shadow w-full'></div>
        </li>

        </ul>
    </div>
  )
}

export default FeaturedCollection;
