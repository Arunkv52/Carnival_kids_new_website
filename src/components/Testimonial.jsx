import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import ReviewImg from '../assets/testimonial-3.jpg'

const Testimonial = () => {

    const reviews = [{
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
        image: ReviewImg,
        reviwername: 'Stevie Wills',
        city: 'Coimbatore'

    }, {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
        image: ReviewImg,
        reviwername: 'Stevie Wills',
        city: 'Coimbatore'

    }, {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
        image: ReviewImg,
        reviwername: 'Stevie Wills',
        city: 'Coimbatore'

    }, {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
        image: ReviewImg,
        reviwername: 'Stevie Wills',
        city: 'Coimbatore'

    }, {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.',
        image: ReviewImg,
        reviwername: 'Stevie Wills',
        city: 'Coimbatore'

    }]

    return (
        <>
            <div className='md:px-20 px-5'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // 📱 mobile devices
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2, // 🧩 tablets
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3, // 💻 desktop
                            spaceBetween: 30,
                        },
                    }}
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide>
                            <div className="bg-[#f6f5ff] py-10 md:px-13 px-5">
                                <p key={index} className='text-[18px]'>{item.review}</p>
                                <div className="flex flex-col justify-center items-center md:pt-10 pt-5">
                                    <img src={item.image} alt="" className="rounded-[50px] w-20" />
                                    <h6 className="text-[20px] font-semibold pt-5">{item.reviwername}</h6>
                                    <h6 className="text-[#5764ec]">{item.city}</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>



            </div>

        </>
    )
}

export default Testimonial
