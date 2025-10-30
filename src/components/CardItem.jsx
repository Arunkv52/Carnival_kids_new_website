import React from 'react'

import AboutImg from '../assets/mathematics_class.jpg'
import Physical from '../assets/class-2.jpg'
import English from '../assets/class-3.jpg'

const CardItem = () => {

    const CardItems = [
        {
            cardtitle: 'Mathematics Class',
            cardparagraph: 'Our math curriculum introduces children to numbers and basic mathematical concepts through hands-on materials and real-life activities.',
            image: AboutImg,
            age: '2 to 3 years Pre Mont',
            age1: '3 to 4 years Mont 1',
            age2: '4 to 5 years Mont 2',
            age3: '5 to 6 years Mont 3'

        },
        {
            cardtitle: 'Sport & Physical Class',
            cardparagraph: 'Physical activity is an important part of a child’s development, and our sports program helps children stay active, strong, and energetic.',
            image: Physical,
            age: '2 to 3 years Pre Mont',
            age1: '3 to 4 years Mont 1',
            age2: '4 to 5 years Mont 2',
            age3: '5 to 6 years Mont 3'


        },
        {
            cardtitle: 'English Class',
            cardparagraph: 'Children learn to express their thoughts clearly, build vocabulary, improve pronunciation, and gain confidence in communication—skills that prepare them for higher learning and everyday life.',
            image: Physical,
            age: '2 to 3 years Pre Mont',
            age1: '3 to 4 years Mont 1',
            age2: '4 to 5 years Mont 2',
            age3: '5 to 6 years Mont 3'


        },
    ]



    return (
        <>
            <div className='md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5 md:px-20 px-5'>
                {CardItems.map((item, index) => (
                    <div className='bg-white p-5 rounded-[10px] shadow-2xl'>
                        <div className='text-left border-b-2 border-[#f2f2f2] py-3'>
                            <img src={item.image} alt="" key={index} className='rounded-[10px]' />
                            <h1 className='text-2xl pt-10' key={index}>{item.cardtitle}</h1>
                            <p className='py-3 text-black/80' key={index}>{item.cardparagraph}</p>
                        </div>
                        <div className='grid grid-cols-3 gap-5 py-5 text-left text-sm'>
                            <div className=''>
                                <h5>Age : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.age}</span></h5>
                            </div>
                            <div className=''>
                                <h5>Age : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.age1}</span></h5>
                            </div>
                            <div className=''>
                                <h5>Age : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.age2}</span></h5>
                            </div>
                            <div className=''>
                                <h5>Age : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.age3}</span></h5>
                            </div>

                        </div>
                    </div>
                ))}

            </div>


        </>
    )
}

export default CardItem
