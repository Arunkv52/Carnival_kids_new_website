import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import BlogImg from '../assets/blog-1.jpg'
import { FaRegCalendar } from 'react-icons/fa'

const Blog = () => {
  return (
    <>
      <div className='blog-all md:grid md:grid-cols-3 grid grid-cols-1 md:gap-5 gap-0 md:px-20 px-5'>
        <div className='blog-1 bg-white shadow-2xl'>
          <img src={BlogImg} alt='' />
          <div className='p-6 text-left'>
            <p className=' text-[#7b68ee] font-bold flex justify-start items-center gap-2 py-2'>
              <FaRegCalendar /> 17, Nov 2025
            </p>
            <h2 className='text-[22px] py-3'>
              Tips for Building Effective Communication with Families, Staff,
              and Students
            </h2>
            <p className='text-black/80 py-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt
            </p>
            <p className='flex justify-start items-center gap-3 text-[#7b68ee] cursor-pointer hover:translate-x-4 font-bold py-3'>
              <FaArrowRightLong /> Read more
            </p>
          </div>
        </div>
        <div className='blog-1 bg-white shadow-2xl'>
          <img src={BlogImg} alt='' />
          <div className='p-6 text-left'>
            <p className=' text-[#7b68ee] font-bold flex justify-start items-center gap-2 py-2'>
              <FaRegCalendar /> 17, Nov 2025
            </p>
            <h2 className='text-[22px] py-3'>
              Tips for Building Effective Communication with Families, Staff,
              and Students
            </h2>
            <p className='text-black/80 py-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt
            </p>
            <p className='flex justify-start items-center gap-3 text-[#7b68ee] cursor-pointer hover:translate-x-4 font-bold py-3'>
              <FaArrowRightLong /> Read more
            </p>
          </div>
        </div>
        <div className='blog-1 bg-white shadow-2xl'>
          <img src={BlogImg} alt='' />
          <div className='p-6 text-left'>
            <p className=' text-[#7b68ee] font-bold flex justify-start items-center gap-2 py-2'>
              <FaRegCalendar /> 17, Nov 2025
            </p>
            <h2 className='text-[22px] py-3'>
              Tips for Building Effective Communication with Families, Staff,
              and Students
            </h2>
            <p className='text-black/80 py-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt
            </p>
            <p className='flex justify-start items-center gap-3 text-[#7b68ee] cursor-pointer hover:translate-x-4 font-bold py-3'>
              <FaArrowRightLong /> Read more
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
