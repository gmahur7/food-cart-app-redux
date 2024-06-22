'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import Image from 'next/image';
import SliderBtns from './SliderBtns';

const images = [
    "/images/slider/slider1.jpeg",
    "/images/slider/slider2.jpg",
    "/images/slider/slider3.jpeg",
    "/images/slider/slider4.webp",
    "/images/slider/slider5.jpeg",
]

const Slider = () => {

    // const [images,setImages]=useState()

    

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        console.log(currentIndex)
    }

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className='my-8 w-75 md:h-1/2 md:w-3/4 relative'
        >
            {
                images.map((url, ind) => {
                    return <SwiperSlide key={ind}>
                        <div className=''>
                            <Image src={url} alt={`slide/${ind + 1}`} className='object-cover' height={300} width={500} layout='responsive' />
                        </div>
                    </SwiperSlide>
                })
            }
            <SliderBtns/>
        </Swiper>
    );
};

export default Slider;