"use client"
import Link from 'next/link'
import React from 'react'

const AnnoucementBar = () => {
  return (
    <div className='bg-black text-white text-[14px] text-center max-sm:px-[16px] py-3 font-medium'>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link href={'/'} className='underline text-yellow-200'>Shop Now</Link>



</div>
  )
}

export default AnnoucementBar