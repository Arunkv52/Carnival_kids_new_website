import React from 'react'
import TeacherImg from '../assets/gallery/managing-director.jpeg'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsYoutube } from 'react-icons/bs'

const TeachersList = () => {
    const teachers = [
        {
            name: 'Vidhya',
            position: 'Teacher',
            image: TeacherImg
        },
        {
            name: 'Vidhya',
            position: 'Teacher',
            image: TeacherImg
        },
        {
            name: 'Vidhya',
            position: 'Teacher',
            image: TeacherImg
        }
    ]
    return (
        <>
            <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-10 md:px-20">
                {teachers.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-2xl p-5 group relative overflow-hidden"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto transition-opacity duration-500 group-hover:opacity-80"
                            />

                            {/* Social Icons Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
                                <ul className="flex gap-3">
                                    <li className="bg-[#7b68ee] p-3 text-white rounded-[10px] cursor-pointer hover:bg-[#5a4ad1] transition">
                                        <FaFacebookF />
                                    </li>
                                    <li className="bg-[#7b68ee] p-3 text-white rounded-[10px] cursor-pointer hover:bg-[#5a4ad1] transition">
                                        <FaInstagram />
                                    </li>
                                    <li className="bg-[#7b68ee] p-3 text-white rounded-[10px] cursor-pointer hover:bg-[#5a4ad1] transition">
                                        <FaXTwitter />
                                    </li>
                                    <li className="bg-[#7b68ee] p-3 text-white rounded-[10px] cursor-pointer hover:bg-[#5a4ad1] transition">
                                        <FaLinkedinIn />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="pt-5 text-center">
                            <h5 className="text-2xl font-semibold">{item.name}</h5>
                            <p className="text-[#5764ec]">{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default TeachersList
