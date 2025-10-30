import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../assets/logo.png'
import { Link } from 'react-router'

const Header = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrollY(currentScroll)
      setIsFixed(currentScroll > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out md:px-10 px-0 ${
        isFixed
          ? 'fixed bg-white shadow-md translate-y-0'
          : scrollY > 0
          ? '-translate-y-5 opacity-90'
          : 'absolute bg-transparent'
      }`}
    >
      <div className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/* Logo */}
        <div className='flex items-center space-x-2 transition-all duration-500 ease-in-out'>
          <img
            src={Logo}
            alt='Rainbow'
            className={`object-contain transition-all duration-500 ease-in-out ${
              isFixed ? 'h-12' : 'md:h-30 h-15'
            }`}
          />
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-8 text-gray-700 font-medium'>
          <Link to={'/'} className='hover:text-[#7b5bff] transition'>
            Home
          </Link>
          <Link to={'/about'} className='hover:text-[#7b5bff] transition'>
            About Us
          </Link>
          <Link to={'/curriculum'} className='hover:text-[#7b5bff] transition'>
            Curriculum
          </Link>
          <Link to={'/gallery'} className='hover:text-[#7b5bff] transition'>
            Gallery
          </Link>
          <Link to={'/blog'} className='hover:text-[#7b5bff] transition'>
            Blog
          </Link>
        </nav>

        {/* Desktop Button */}
        <button className='hidden md:block bg-[#7b5bff] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#6b4bf8] transition'>
          <Link to={'/contact'}>Enroll Now</Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden text-gray-700 text-2xl'
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='md:hidden bg-white shadow-lg border-t border-gray-100'>
          <nav className='flex flex-col text-gray-700 font-medium'>
            <Link
              to={'/'}
              className='py-3 px-6 border-b border-gray-100 hover:bg-gray-50'
            >
              Home
            </Link>
            <Link
              to={'/about'}
              className='py-3 px-6 border-b border-gray-100 hover:bg-gray-50'
            >
              About Us
            </Link>
            <Link
              to={'/curriculum'}
              className='py-3 px-6 border-b border-gray-100 hover:bg-gray-50'
            >
              Curriculum
            </Link>
            <Link
              to={'/gallery'}
              className='py-3 px-6 border-b border-gray-100 hover:bg-gray-50'
            >
              Gallery
            </Link>
            <Link
              to={'/blog'}
              className='py-3 px-6 border-b border-gray-100 hover:bg-gray-50'
            >
              Blog
            </Link>

            <div className='px-6 py-4'>
              <Link to={'/contact'}>
                <button className='w-full bg-[#7b5bff] text-white py-2 rounded-full shadow-md hover:bg-[#6b4bf8] transition cursor-pointer'>
                  Enroll Now
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
