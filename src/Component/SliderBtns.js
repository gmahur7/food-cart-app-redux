"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";

const SliderBtns = () => {
    const swiper = useSwiper()
  return (
    <div>
                <button className='absolute top-1/2 left-0 z-10 translate-y-[-50%] bg-transparent rounded
                p-2 text-lg text-gray-600 hover:text-gray-900 transition duration-300 ease
                ' onClick={()=>swiper.slidePrev()}><FaChevronCircleLeft  className='text-4xl md:text-6xl text-[#216BE8]' /></button>
                <button className='absolute top-1/2 right-0 z-10 translate-y-[-50%] bg-transparent rounded
                p-2 text-lg text-gray-600 hover:text-gray-900 transition duration-300 ease
                ' onClick={()=>swiper.slideNext()}><FaChevronCircleRight className='text-4xl md:text-6xl text-[#216BE8]' /></button>
            </div>
  )
}

export default SliderBtns