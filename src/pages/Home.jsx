import React from 'react'
import Header from '../components/Header'
import ImgRight from '../assets/home-font.png'
import BgStudy from '../assets/bg-study-shape.jpg'
import SmallImg from '../assets/about-sub.jpg'
import Card from '../components/CardItem'
import CardItem from '../components/CardItem'
import Footer from '../components/Footer'
import DrawImg from '../assets/choose-1.jpg'
import IconImg1 from '../assets/experience.svg'

const Home = () => {
    return (
        <>
            <div className='bg-home h-auto'>
                <section className='md:px-10 px-2 pt-18 md:pt-0 md:py-0'>
                    <Header />
                    <div className='md:flex md:justify-around gap-0'>
                        <div className='left md:w-1/2 w-full md:relative md:top-[250px] relative top-0 md:px-10 px-2'>
                            <p className='text-[#95c535] md:text-[18px] text-base uppercase font-bold'>
                                Play. <span className='text-[#7b68ee]'>Learn.</span> Grow
                            </p>
                            <h4 className='md:text-5xl text-2xl font-bold py-3'>
                                Global Learning Experience at <br />
                                <span className='text-[#7b68ee]'>
                                    {' '}
                                    Kids & kindergarden School
                                </span>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua,
                                magna aliqua. ipsum is simply dummy text of the printing.
                            </p>
                            <div className='py-5 flex justify-start gap-5'>
                                <button className='bg-[#fefcfc] text-[#7b68ee] rounded-[50px] shadow-xl/30 px-9 py-3'>
                                    Enroll Now
                                </button>
                                <button className='bg-[#7b68ee] text-white rounded-[50px] shadow-xl/30 px-9 py-3'>
                                    Careers
                                </button>
                            </div>
                        </div>
                        <div className='right md:w-1/2 w-full h-auto md:relative md:top-30 relative top-0'>
                            <img
                                src={ImgRight}
                                alt=''
                                className='md:w-full md:h-[70%] h-[250px] object-contain'
                            />
                        </div>
                    </div>
                </section>
                <section className='md:py-0'>
                    <div className='bg-shape'>
                        <div className='md:flex md:justify-around items-start gap-0'>
                            <div className='left md:w-1/2 w-full md:relative md:top-[250px] relative top-10 md:px-20 px-5'>
                                <p className='text-[#95c535] md:text-[18px] text-base uppercase font-bold'>
                                    Welcome To Pre School
                                </p>
                                <h4 className='md:text-5xl text-3xl font-bold py-3'>
                                    We Learn Smart Way To Build Bright Futute For Your Children
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className='md:py-5 py-5 flex justify-start gap-5'>
                                    <button className='bg-[#7b68ee] text-white rounded-[50px] shadow-xl/30 px-9 py-3'>
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            <div className='right md:w-1/2 max-w-fit md:relative md:top-60 md:left0 left-2 relative top-20 p-1'>
                                <img
                                    src={BgStudy}
                                    alt=''
                                    className='w-10/12 h-10/12 object-cover'
                                />
                                <div className='toolTip bg-white flex justify-start gap-2 w-[300px] rounded-[10px] shadow-2xl md:relative md:-top-30 md:left-30 relative left-10 -top-30 py-2'>
                                    <img src={SmallImg} alt='' className='w-[150px] px-5' />
                                    <div>
                                        <h4 className='md:text-5xl text-5xl font-bold text-[#95c535]'>
                                            2003
                                        </h4>
                                        <h6 className='text-[18px]'>School Since</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='md:pt-15'>
                    <div className='bg-[#f6f5ff] py-10 text-center'>
                        <h1 className='text-[#95c535] text-[18px] uppercase font-bold md:pt-5 pt-3'>
                            On Going Classes
                        </h1>
                        <h4 className='md:text-5xl text-3xl font-bold pt-5 md:pb-10 pb-5'>
                            Popular Classes
                        </h4>
                        <CardItem />
                    </div>
                </section>
                <section>
                    <div className='bg-[#5c84eb] text-white pt-30 pb-10'>
                        <div className='flex justify-around'>
                            <div
                                className="text-center ">
                                <p className="text-6xl font-bold">20+</p>
                                <p className="text-[20px]">Years of Experience</p>
                                <img src={IconImg1} alt="" className='w-20 relative -top-25 left-20 opacity-30'/>
                            </div>
                            <div className='text-center'>
                                <p className='text-6xl font-bold'>100+</p>
                                <p className='text-[20px]'>Qualified Teachers</p>
                                <img src={IconImg1} alt="" className='w-20 relative -top-25 left-20 opacity-30'/>
                            </div>
                            <div className='text-center'>
                                <p className='text-6xl font-bold'>1500+</p>
                                <p className='text-[20px]'>Students Enrolled</p>
                                <img src={IconImg1} alt="" className='w-20 relative -top-25 left-30 opacity-30'/>
                            </div>
                            <div className='text-center'>
                                <p className='text-6xl font-bold'>20+</p>
                                <p className='text-[20px]'>Total Award</p>
                                <img src={IconImg1} alt="" className='w-20 relative -top-25 left-10 opacity-30'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='py-20 px-20 md:flex justify-around items-start gap-5'>
                        <div className='left w-1/2 p-5'>
                            <img src={DrawImg} alt='' />
                        </div>
                        <div className='right w-1/2'>
                            <p className='text-[#95c535] text-[18px] uppercase font-bold md:pt-5 pt-3'>
                                Why Choose us?
                            </p>
                            <h2 className='text-5xl font-semibold py-2'>
                                We Are Here to Help Parents Raise Happy and Healthy
                                Children
                            </h2>
                            <p className='text-[18px] py-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className='md:grid grid-cols-2 gap-8 py-5'>
                                <div className='shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl'>
                                    <p>🌟  Daily Creativity</p>
                                </div>
                                <div className='shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl'>
                                    <p>🌟  Daily Creativity</p>
                                </div>
                                <div className='shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl'>
                                    <p>🌟  Daily Creativity</p>
                                </div>
                                <div className='shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl'>
                                    <p>🌟  Daily Creativity</p>
                                </div>
                                <div className='shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl'>
                                    <p>🌟  Daily Creativity</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Home
