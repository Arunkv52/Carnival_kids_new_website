import React from 'react'
import '../App.css'
import Header from '../components/Header'
import curriculumImg from '../assets/about-04.png'
import Icon_34 from '../assets/34.svg'
import VideoPopup from '../components/VideoPopup'
import Footer from '../components/Footer'
import Event from '../assets/about-04.png'
import Wave from '../assets/hero-boy-2.png'
import GirlPng from '../assets/about-girl.png'
import AccordionNew from '../components/AccordionNew'
import Bird1 from '../assets/bird-1.png'
import Bird2 from '../assets/bird-2.png'
import Bird3 from '../assets/bird-bottom.png'


const Curriculam = () => {
  return (
    <>
      <div className='curriculam-bg'>
        <Header />
        <div className=' px-15 w-full py-20'>
          <h2 className='md:text-5xl text-left relative top-20 left-[60%] font-bold '>
            Welcome to our <br />
            <span className='text-[#7b5bff]'>child care school</span>
          </h2>
        </div>
      </div>
      <div className='md:flex justify-between items-center gap-5 py-20 px-20 bg-[#f4f4f4]'>
        <div className='w-1/2'>
          <img src={curriculumImg} alt='' />
        </div>
        <div className='w-1/2'>
          <h5 className='text-5xl font-bold'>
            Discover Story Nurturing Young <br /> Minds at{' '}
            <span className='text-[#7b5bff]'> studykids</span>
          </h5>
          <p className='py-5'>
            The Y is dedicated to providing comprehensive programs and services
            that enrich communities — and all of the people who live in them —
            across the country in fulfillment of our mission.
          </p>
          <div className='md:flex justify-start items-center gap-5 py-2'>
            <span className='bg-[#c28b8b] p-1 rounded-[50px]'>
              <img src={Icon_34} alt='' className=' relative -left-4' />
            </span>

            <div>
              <p className='text-3xl font-bold'>Youth Development</p>
              <p className='py-2 text-black/60'>
                We help young people to grow into healthy, thriving adults by
                offering supportive education.
              </p>
            </div>
          </div>
          <div className='md:flex justify-start items-center gap-5 py-2'>
            <span className='bg-[#779ad3] p-1 rounded-[50px]'>
              <img src={Icon_34} alt='' className=' relative -left-4' />
            </span>
            <div>
              <p className='text-3xl font-bold'>Youth Development</p>
              <p className='py-2 text-black/60'>
                We help young people to grow into healthy, thriving adults by
                offering supportive education.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Sections */}

      <div className='bg-[#f6f5ff] py-0 text-center w-full overflow-x-hidden'>
        <VideoPopup />
      </div>

      {/* wave start */}
      <div className='px-50 py-20 wave-center'>
        <div className=' md:flex justify-between items-center gap-5'>
          <div className='w-1/2'>
            <AccordionNew />
          </div>
          <div className='w-1/2'>
            <img src={GirlPng} alt='' className='w-full h-[500px] object-contain' />
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Curriculam
