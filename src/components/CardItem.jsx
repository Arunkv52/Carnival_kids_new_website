import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AboutImg from '../assets/mathematics_class.jpg'
import Physical from '../assets/class-2.jpg'
import English from '../assets/class-3.jpg'

const CardItem = () => {

    const CardItems = [
        {
            cardtitle: 'Mathematics Class',
            cardparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
            image: AboutImg,
            age: '3-5 years',
            time: '10-12 AM',
            capacity: '50 Kids'
        },
        {
            cardtitle: 'Sport & Physical Class',
            cardparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
            image: Physical,
            age: '3-5 years',
            time: '10-12 AM',
            capacity: '50 Kids'
        },
        {
            cardtitle: 'English Class',
            cardparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
            image: Physical,
            age: '3-5 years',
            time: '10-12 AM',
            capacity: '50 Kids'
        },
        {
            cardtitle: 'Mathematics Class',
            cardparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
            image: English,
            age: '3-5 years',
            time: '10-12 AM',
            capacity: '50 Kids'
        },
        {
            cardtitle: 'Sport & Physical Class',
            cardparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
            image: AboutImg,
            age: '3-5 years',
            time: '10-12 AM',
            capacity: '50 Kids'
        },
        {
            cardtitle: 'English Class',
            cardparagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
            image: AboutImg,
            age: '3-5 years',
            time: '10-12 AM',
            capacity: '50 Kids'
        }]



    return (
        <>
            <div className='md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5 md:px-20 px-5'>
                {CardItems.map((item, index) => (
                    <div className='bg-white p-8 rounded-[10px] shadow-2xl'>
                        <div className='text-left border-b-2 border-[#f2f2f2] py-3'>
                            <img src={item.image} alt="" key={index} className='rounded-[10px]' />
                            <h1 className='text-2xl pt-10' key={index}>{item.cardtitle}</h1>
                            <p className='py-3 text-black/80' key={index}>{item.cardparagraph}</p>
                        </div>
                        <div className='grid grid-cols-3 py-5 text-left'>
                            <div className=''>
                                <h5>Age : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.age}</span></h5>
                            </div>
                            <div className=''>
                                <h5>Time : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.time}</span></h5>
                            </div>
                            <div className=''>
                                <h5>Capacity : <br /> <span className='text-[#7b68ee] font-extrabold'>{item.capacity}</span></h5>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </>
    )
}

export default CardItem
