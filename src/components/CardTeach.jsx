import React from 'react'

import AboutImg from '../assets/mathematics_class.jpg'
import Physical from '../assets/class-2.jpg'
import English from '../assets/class-3.jpg'

const CardTeach = () => {

    const CardItems = [
        {
            cardtitle: 'Explore the World',
            cardparagraph: 'Through curiosity, play, and creativity, children discover knowledge beyond textbooks.',
            image: AboutImg,
        },
        {
            cardtitle: 'Grow with Confidence',
            cardparagraph: 'Nurturing every child to become confident, independent, and compassionate individuals.',
            image: Physical,
           
        },
        {
            cardtitle: 'Learn at Own Pace',
            cardparagraph: 'Hands-on Montessori methods encourage independence and personalized learning.',
            image: Physical,
           
        },
        ]



    return (
        <>
            <div className='md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5 md:px-20 px-5'>
                {CardItems.map((item, index) => (
                    <div className='bg-white p-5 rounded-[10px] shadow-2xl'>
                        <div className='text-left py-3'>
                            <img src={item.image} alt="" key={index} className='rounded-[10px]' />
                            <h1 className='text-2xl pt-10' key={index}>{item.cardtitle}</h1>
                            <p className='py-3 text-black/80' key={index}>{item.cardparagraph}</p>
                        </div>
                        
                    </div>
                ))}

            </div>


        </>
    )
}

export default CardTeach
