import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LightGalleryItem from '../components/LightGalleryItem'

const Gallery = () => {
  return (
    <>
      <div className='blog-main md:py-20 md:pt-0 md:pb-10 pt-60 pb-10'>
        <Header />
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#a2d9ff'
            fill-opacity='0.54'
            d='M0,96L20,106.7C40,117,80,139,120,122.7C160,107,200,53,240,64C280,75,320,149,360,170.7C400,192,440,160,480,128C520,96,560,64,600,58.7C640,53,680,75,720,80C760,85,800,75,840,90.7C880,107,920,149,960,165.3C1000,181,1040,171,1080,149.3C1120,128,1160,96,1200,106.7C1240,117,1280,171,1320,165.3C1360,160,1400,96,1420,64L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z'
          ></path>
        </svg>
        <div className='blog-area md:absolute md:top-1/3 md:left-1/3 absolute top-40 flex flex-col justify-center items-center text-center'>
          <h1 className='text-5xl font-bold py-2'>Gallery</h1>
          <p className='text-base'>
            kindergarten is an early childhood educational environment where
            young children, <br /> typically aged 4 to 6, engage in playful
            learning.
          </p>
        </div>
      </div>
      <div>
        <LightGalleryItem />
      </div>
      <Footer />
    </>
  )
}

export default Gallery
