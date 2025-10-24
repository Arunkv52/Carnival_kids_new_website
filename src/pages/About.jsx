import React from 'react'
import Header from '../components/Header'
import '../App.css'
import AboutImg from '../assets/about-1.jpg'
import AmiLogo from '../assets/ami-logo.png'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <div className='bg-abt'>
        <Header />
        <div className='relative top-1/3 left-20 w-1/3'>
          <h2 className='text-5xl font-bold'>
            learn through hands-on{' '}
            <span className='text-[#007aff]'> experiences,</span>
            independence, and<span className='text-[#75389f]'> play.</span>
          </h2>
        </div>
      </div>
      <div className='md:px-40 py-20 md:flex justify-around items-start gap-0 bg-[#f4f4f4]'>
        <div className='w-[40%]'>
          <img src={AboutImg} alt='' />
        </div>
        <div className='w-[60%]'>
          <h4 className='text-6xl'>
            Montessori{' '}
            <span className='text-[#007aff] font-bold'> Education</span>
          </h4>
          <p className='pt-8'>
            The Montessori Method of education developed by Dr. Maria Montessori
            is a child-centered, development-based approach to education. Dr.
            Maria Montessori observed that the child absorbs from the
            environment they are in. She also believed that when children work
            on their own, they could reach new levels of independence. They
            become self-motivated and have better understanding. Dr. Montessori
            used specially designed materials, to incite the child’s inner
            desire to learn.
          </p>
          <p className='pt-5'>
            The period from birth to six years the young child has special
            powers. The child learns by unconsciously taking in everything
            around him and constructs himself, just like a sponge in water.
            Using his senses, he creates himself by absorbing everything from
            his environment through living in his environment. He does this
            easily and naturally.
          </p>
          <p className='pt-5'>
            From birth to three years old, the young child unknowingly or
            unconsciously acquires his basic abilities. The child’s work during
            this period is to become independent from the adult for his basic
            human functions. He learns to speak, to walk, to gain control of his
            hands and to master his bodily functions. Once the child achieves
            these basic skills, by about three years old, he moves into the next
            phase. During this period, the child starts developing his will. In
            this phase he needs freedom to move, freedom to choose and freedom
            to concentrate. This is the period when the child comes to the
            Montessori Environment.
          </p>
          <div>
            <h5 className='font-bold text-2xl py-5'>
              AMI Certified Montessori Adult
            </h5>
            <div className='flex justify-start items-center gap-5'>
              <img src={AmiLogo} alt='' srcset='' className='w-30' />
              <div className='flex flex-col justify-start items-start'>
                <p className='text-[18px] font-extrabold'>
                  “Enroll today and unlock a world of knowledge with IMF
                  School’s trusted registration process.”
                </p>
                <a href='#' className='text-[#007aff] font-bold py-3'>
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-bottom py-20'>
        <div className='px-20'>
          <h5 className='text-white text-5xl w-1/2'>
            Children are naturally interested in activities that are done in the
            day to day living like sweeping, mopping or washing clothes etc
          </h5>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
