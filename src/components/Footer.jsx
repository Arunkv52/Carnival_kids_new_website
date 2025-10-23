import React from "react";
import FooterImg from "../assets/footer.png";
import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";





const Footer = () => {
    return (
        <>
            <footer
                className="bg-cover bg-no-repeat bg-center h-auto px-6 md:px-20 py-10 text-gray-700"
                style={{ backgroundImage: `url(${FooterImg})` }}
            >
                <div className="flex justify-evenly items-start gap-5">
                    <div className='w-[40%]'>
                        <img src={Logo} alt="Rainbow Footer" className="w-24 mb-4" />
                        <p className="text-[18px]">
                            Where curiosity meets creativity, and learning becomes a joyful journey. Together, we nurture confident, independent, and compassionate young minds..

                        </p>
                        <div className="social py-5">
                            <ul className="md:flex justify-start items-center gap-2">
                                <li className="bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer"><FaFacebookF /></li>
                                <li className="bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer"><FaInstagram /></li>
                                <li className="bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer"><FaXTwitter /></li>
                                <li className="bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer"><BsYoutube /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className="social py-2">
                            <h6 className="text-2xl font-semibold">Quick links</h6>
                            <ul className="py-2">
                                <li className="py-2">About</li>
                                <li className="py-2">Curriculam</li>
                                <li className="py-2">Gallery</li>
                                <li className="py-2">Blog</li>
                                <li className="py-2">Contact</li>

                            </ul>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className="social py-2">
                            <div>
                                <h6 className="text-2xl font-semibold">Address</h6>
                                <p className="py-2">No 9, Rajalakshmi Nagar, Subramaniam palayam, GN Mills, Coimbatore – 641029</p>
                            </div>
                            <div className="py-4">
                                <h6 className="text-2xl font-semibold">Contact Info</h6>
                                <div className="py-2" >
                                    <p className="flex justify-start items-center gap-3"><FaPhoneAlt />  Phone</p>
                                    <p>+91 98402 22744</p>
                                </div>
                                <div className="py-2" >
                                    <p className="flex justify-start items-center gap-3"><MdOutlineMarkEmailUnread />  Email</p>
                                    <p>info@carnivalkidsmontessori.com</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </footer>
            <div className="flex justify-between items-center bg-[#bbbbbb] px-20 py-5">
                <div className="left">
                    <p>© 2025 - Carnival Kids Developed by Prism Adverto</p>
                </div>
                <div className="right">
                    <ul className="flex justify-start items-center gap-2">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </>


    );
};

export default Footer;
