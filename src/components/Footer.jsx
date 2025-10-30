import React from 'react'
import FooterImg from '../assets/footer.png'
import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsYoutube } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { Link } from 'react-router'


const Footer = () => {
  return (
    <>
      <footer
        className='bg-cover bg-no-repeat bg-center h-auto px-6 md:px-20 md:py-10 py-10 text-gray-700'
        style={{ backgroundImage: `url(${FooterImg})` }}
      >
        <div className='md:flex justify-evenly items-start gap-5'>
          <div className='md:w-[40%] w-full'>
            <img src={Logo} alt='Rainbow Footer' className='md:w-40 w-50 mb-4' />
            <p className='text-[18px]'>
              Where curiosity meets creativity, and learning becomes a joyful
              journey. Together, we nurture confident, independent, and
              compassionate young minds..
            </p>
            <div className='social py-5'>
              <ul className='md:flex flex justify-start items-center gap-2'>
                <a href="https://www.facebook.com/people/Carnival-Kids-Montessori/100057778115140/">
                  <li className='bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer'>
                    <FaFacebookF />
                  </li>
                </a>
                <a href="https://www.instagram.com/carnival_kids_montessori/">
                  <li className='bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer'>
                    <FaInstagram />
                  </li>
                </a>
                <a href="#">
                  <li className='bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer'>
                    <FaXTwitter />
                  </li>
                </a>
                <a href="#">

                  <li className='bg-[#7b68ee] p-4 text-white max-w-fit rounded-[10px] cursor-pointer'>
                    <BsYoutube />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className='md:w-[30%] w-full'>
            <div className='social md:py-2 py-5'>
              <h6 className='text-2xl font-semibold'>Quick links</h6>
              <ul className='py-2'>
                <li className='py-2 cursor-pointer'>
                  <Link to={'/about'}>
                    About
                  </Link>
                </li>
                <li className='py-2 cursor-pointer'> <Link to={'/curriculum'}>Curriculam</Link></li>
                <li className='py-2 cursor-pointer'> <Link to={'/gallery'}>Gallery</Link></li>
                <li className='py-2 cursor-pointer'> <Link to={'/blog'}>Blog</Link></li>
                <li className='py-2 cursor-pointer'> <Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className='md:w-[30%] w-full'>
            <div className='social md:py-2 py-5'>
              <div>
                <h6 className='text-2xl font-semibold'>Address</h6>
                <p className='py-2'>
                  No 9, Rajalakshmi Nagar, Subramaniam palayam, GN Mills,
                  Coimbatore – 641029
                </p>
              </div>
              <div className='py-4'>
                <h6 className='text-2xl font-semibold'>Contact Info</h6>
                <div className='py-2'>
                  <p className='flex justify-start items-center gap-3'>
                    <FaPhoneAlt /> Phone
                  </p>
                  <p>+91 98402 22744</p>
                </div>
                <div className='py-2'>
                  <p className='flex justify-start items-center gap-3'>
                    <MdOutlineMarkEmailUnread /> Email
                  </p>
                  <p>info@carnivalkidsmontessori.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='md:flex justify-between items-center bg-[#bbbbbb] md:px-20 px-5 py-5'>
        <div className='left'>
          <p>© 2025 - Carnival Kids Developed by Prism Adverto</p>
        </div>
        <div className='right text-center'>
          <ul className='md:flex justify-start items-center gap-6 md:py-2 py-2 cursor-pointer'>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
