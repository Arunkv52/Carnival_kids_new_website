import React from 'react'

// Lightgallery import
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


// Image import
import GalleryImg1 from '../assets/gallery/1.webp'
import GalleryImg2 from '../assets/gallery/2.webp'
import GalleryImg3 from '../assets/gallery/3.webp'
import GalleryImg4 from '../assets/gallery/4.webp'
import GalleryImg5 from '../assets/gallery/5.webp'


const LightGalleryItem = () => {
     const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <>
            <div className="md:py-10 py-0">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="md:grid md:grid-cols-3 md:gap-5 md:px-20 px-5 grid grid-cols-1 gap-10"
                >
                    <a href={GalleryImg1}>
                        <img alt="img1" src={GalleryImg1} className='rounded-2xl'/>
                    </a>
                    <a href={GalleryImg2}>
                        <img alt="img2" src={GalleryImg2} className='rounded-2xl'/>
                    </a>
                    <a href={GalleryImg3}>
                        <img alt="img1" src={GalleryImg3} className='rounded-2xl'/>
                    </a>
                    <a href={GalleryImg4}>
                        <img alt="img2" src={GalleryImg4} className='rounded-2xl'/>
                    </a>
                   <a href={GalleryImg5}>
                        <img alt="img2" src={GalleryImg5} className='rounded-2xl'/>
                    </a>
                </LightGallery>
            </div>
        </>
    )
}

export default LightGalleryItem