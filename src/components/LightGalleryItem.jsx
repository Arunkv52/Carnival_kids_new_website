import React from 'react'

// Lightgallery import
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// Image import
import GalleryImg1 from '../assets/gallery/1.webp'
import GalleryImg2 from '../assets/gallery/2.webp'
import GalleryImg3 from '../assets/gallery/3.webp'
import GalleryImg4 from '../assets/gallery/4.webp'
import GalleryImg5 from '../assets/gallery/5.webp'

import GalleryImg6 from '../assets/iCloud/FullSizeRender-1.jpeg'
import GalleryImg7 from '../assets/iCloud/FullSizeRender-2.jpeg'
import GalleryImg8 from '../assets/iCloud/FullSizeRender-3.jpeg'
import GalleryImg9 from '../assets/iCloud/FullSizeRender.jpeg'
import GalleryImg10 from '../assets/iCloud/IMG_0532.jpeg'

import GalleryImg11 from '../assets/iCloud/IMG_0532.jpeg'
import GalleryImg12 from '../assets/iCloud/IMG_0533.jpeg'
import GalleryImg13 from '../assets/iCloud/IMG_0535.jpeg'
import GalleryImg14 from '../assets/iCloud/IMG_0539.jpeg'
import GalleryImg15 from '../assets/iCloud/IMG_0541.jpeg'

import GalleryImg16 from '../assets/iCloud/IMG_0559.jpeg'
import GalleryImg17 from '../assets/iCloud/IMG_0564.jpeg'
import GalleryImg18 from '../assets/iCloud/IMG_0567.jpeg'
import GalleryImg19 from '../assets/iCloud/IMG_0573.jpeg'
import GalleryImg20 from '../assets/iCloud/IMG_0582.jpeg'

const LightGalleryItem = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized')
  }

  return (
    <>
      <div className='md:py-10 py-0'>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames='md:grid md:grid-cols-3 md:gap-5 md:px-20 px-5 grid grid-cols-1 gap-10'
        >
          <a href={GalleryImg1}>
            <img alt='img1' src={GalleryImg1} className='rounded-2xl' />
          </a>
          <a href={GalleryImg2}>
            <img alt='img2' src={GalleryImg2} className='rounded-2xl' />
          </a>
          <a href={GalleryImg3}>
            <img alt='img1' src={GalleryImg3} className='rounded-2xl' />
          </a>
          <a href={GalleryImg4}>
            <img alt='img2' src={GalleryImg4} className='rounded-2xl' />
          </a>
          <a href={GalleryImg5}>
            <img alt='img2' src={GalleryImg5} className='rounded-2xl' />
          </a>
          <a href={GalleryImg6}>
            <img alt='' src={GalleryImg6} className='rounded-2xl' />
          </a>
          <a href={GalleryImg7}>
            <img alt='' src={GalleryImg7} className='rounded-2xl' />
          </a>
          <a href={GalleryImg8}>
            <img alt='' src={GalleryImg8} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg9}>
            <img alt='' src={GalleryImg9} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg10}>
            <img alt='' src={GalleryImg10} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg11}>
            <img alt='' src={GalleryImg11} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg12}>
            <img alt='' src={GalleryImg12} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg13}>
            <img alt='' src={GalleryImg13} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg14}>
            <img alt='' src={GalleryImg14} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg15}>
            <img alt='' src={GalleryImg15} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg16}>
            <img alt='' src={GalleryImg16} className='rounded-2xl' />
          </a>{' '}
          <a href={GalleryImg17}>
            <img alt='' src={GalleryImg17} className='rounded-2xl' />
          </a>
        </LightGallery>
      </div>
    </>
  )
}

export default LightGalleryItem
