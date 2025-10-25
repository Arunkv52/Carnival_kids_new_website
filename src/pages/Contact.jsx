import React from 'react'
import Footer from '../components/Footer'
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri'
import Header from '../components/Header'
import ContactImg from '../assets/contact.png'

const Contact = () => {
  return (
    <>
      <div>
        <Header />
        <div className='relative top-70  py-10'>
          <h1 className='text-5xl font-bold text-center'>Contact</h1>
          <p className='text-base text-center py-2'>
            kindergarten is an early childhood educational environment where
            young children, <br /> typically aged 4 to 6, engage in playful
            learning.
          </p>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#a2d9ff'
            fill-opacity='0.54'
            d='M0,96L20,106.7C40,117,80,139,120,122.7C160,107,200,53,240,64C280,75,320,149,360,170.7C400,192,440,160,480,128C520,96,560,64,600,58.7C640,53,680,75,720,80C760,85,800,75,840,90.7C880,107,920,149,960,165.3C1000,181,1040,171,1080,149.3C1120,128,1160,96,1200,106.7C1240,117,1280,171,1320,165.3C1360,160,1400,96,1420,64L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z'
          ></path>
        </svg>{' '}
      </div>

      <div className='form-place md:px-20 px-5 py-20 md:flex justify-around'>
        {/* Contact Info */}
        <div className='md:w-1/2 w-full md:pb-0 pb-20'>
          <h2 className='md:text-4xl text-2xl'>
            At Carnival Kids Montessori, we don’t just prepare children for
            school – we prepare them for life!
          </h2>
          <ul className='py-10'>
            <li className='md:text-[20px] text-[20px] md:py-1 py-1'>
              <span className='font-semibold text-[#7b5bff]'>Mobile :</span> +91
              98402 22744
            </li>
            <li className='md:text-[20px] text-[20px] md:py-1 py-1'>
              <span className='font-semibold text-[#7b5bff]'>Email :</span>{' '}
              info@carnivalkidsmontessori.com
            </li>
            <li className='md:text-[20px] text-[20px] md:py-1 py-1'>
              <span className='font-semibold text-[#7b5bff]'>Address :</span> No
              9, Rajalakshmi Nagar, <br /> Subramaniam palayam, <br /> GN Mills,{' '}
              <br />
              Coimbatore – 641029
            </li>
          </ul>
          <ul className='text-[#7b5bff] text-[20px] '>
            <li className='hover:text-[#000000] cursor-pointer pb-2'>
              <a
                href='https://www.facebook.com/people/Carnival-Kids-Montessori/100057778115140/'
                className='md:flex flex justify-start items-center gap-3'
              >
                <RiFacebookBoxFill />
                Facebook
              </a>
            </li>
            <li className='hover:text-[#000000] cursor-pointer'>
              <a
                href='https://www.instagram.com/carnival_kids_montessori/'
                className='md:flex flex justify-start items-center gap-3'
              >
                <RiInstagramFill />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Form */}
        <div className='md:w-1/2 w-full'>
          <form action='' className='md:px-10 px-0 py-0 rounded-2xl'>
            <div className='py-2'>
              <label htmlFor='name' className='text-black'></label>
              <input
                type='text'
                name='name'
                id=''
                placeholder='Enter parent name'
                required
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
              />
            </div>
            <div className='py-2'>
              <label htmlFor='name' className='text-black'></label>
              <input
                type='text'
                name='name'
                id=''
                placeholder='Enter child name'
                required
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
              />
            </div>
            <div className='py-2'>
              <select
                name='enquiry'
                id=''
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
                required
              >
                <option value='' selected>
                  Enquiry for son / daughter
                </option>
                <option value='son'>Son</option>
                <option value='daughter'>Daughter</option>
              </select>
            </div>
            <div className='py-2'>
              <label htmlFor='date' className='text-black'></label>

              <input
                type='text'
                name='text'
                id=''
                placeholder='Select date of birth'
                required
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
              />
            </div>

            <div className='py-2'>
              <label htmlFor='tel' className='text-black'></label>
              <input
                type='tel'
                name='name'
                id=''
                placeholder='Enter phone number'
                required
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
              />
            </div>
            <div className='py-2'>
              <label htmlFor='tel' className='text-black'></label>
              <input
                type='tel'
                name='name'
                id=''
                placeholder='Alternative phone number'
                required
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
              />
            </div>
            <div className='py-2'>
              <label htmlFor='email' className='text-black'></label>
              <input
                type='email'
                name='name'
                id=''
                placeholder='Enter email address'
                required
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
              />
            </div>

            <div className='py-2'>
              <label htmlFor='text' className='text-black'></label>
              <select
                name='grade'
                id=''
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
                required
              >
                <option value='' selected>
                  Select Child Age
                </option>
                <option value='Age0'>Age 1 to 2</option>
                <option value='Age1'>Age 2 to 3</option>
                <option value='Age2'>Age 3 to 4</option>
                <option value='Age3'>Age 4 to 5</option>
                <option value='Age4'>Above 5</option>
              </select>
            </div>
            <div className='py-2'>
              <label htmlFor='text' className='text-white'></label>
              <select
                name='grade'
                id=''
                className='bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black border-0 outline-0'
                required
              >
                <option value='' selected>
                  Select Branch
                </option>
                <option value='Coimbatore'>Coimbatore</option>
              </select>
            </div>
            <div className='py-4'>
              <button
                type='submit'
                className='bg-[#51a2ff] border-none text-white font-bold px-8 py-3 hover:bg-black hover:text-white hover:cursor-pointer w-1/2'
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Embedded Map */}
      <div className='md:w-full md:px-10'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6647093664506!2d76.9354615!3d11.0637452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f61be0a53b27%3A0x1787c85597f4d28e!2sCarnival%20Kids!5e0!3m2!1sen!2sus!4v1756730835115!5m2!1sen!2sus'
          className='w-full h-1/2 object-cover'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Google Map'
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default Contact
