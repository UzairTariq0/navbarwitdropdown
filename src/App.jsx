import React, { useState } from 'react'


// Icons
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { BsChevronDown } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';


import Megamenu from './MegaMenu';

const App = () => {
  // For Nav
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-[6.5rem] max-w-full mx-auto px-4 bg-black text-white'>

      {/* LOGO */}
      <div
        className='w-24 ml-4 md:ml-0 md:w-[8.4rem]
                '>
      {/* <a href='/'><img src={logo} alt='logo' className='ml-0 md:ml-60 w-[90%]  '/></a>  */}
      <h2 className='ml-0 md:ml-60 w-[90%] text-3xl'>Logo</h2>
      </div>

      {/* For Desktop */}
      <ul className='hidden md:flex  cursor-pointer mt-4'>
        <li className='p-6 text-xl  hover:text-orange-500 duration-200 '><a href="#">Home</a></li>
        <li className='p-6 text-xl hover:text-orange-500 duration-200 '><a href="/about">About Us</a></li>
        <li className='list-items p-6 text-xl hover:text-orange-500 duration-200 '>
          <span className='flex items-center gap-2'>Services <BsChevronDown className="mt-1" size={16} /></span>
          <Megamenu />
        </li>
        <li className='p-6 text-xl hover:text-orange-500 duration-200 '><a href="/portfolio">Portfolio</a></li>
        {/* <li className='p-6 text-xl hover:text-orange-500 duration-200 '><a href="/ourprocess">Our Process</a></li> */}
        <li className='p-6 text-xl hover:text-orange-500 duration-200 '><a href="/blog">Blogs</a></li>
        <li className='p-6 text-xl hover:text-orange-500 duration-200 '><a href="/team">Our Team</a></li>
        <li className='p-6 text-xl hover:text-orange-500 duration-200 '><a href="/contact">Contact Us</a></li>
      </ul>



       {/* For Mobile */}
       <div className="text-white flex mr-4 mt-4 md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={28} /> : <HiOutlineMenuAlt2 size={28} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed z-50 text-left text-xl left-0 top-[6.5rem] w-[100%] h-full bg-black duration-500'
            : 'hidden'
        }
        onClick={handleNav}
      >
        {/* <ul onClick={handleNav} className={nav ? 'fixed z-50 text-left text-xl left-0 top-24 w-[100%] h-full bg-gray-950 ease-in-out duration-500' : 'ease-in-out fixed top-[-100%] md:hidden'}> */}
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold">
          <a href="#">Home</a>
        </li>
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold">
          <a href="/about">About Us</a>
        </li>
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold relative group">
          <span className="flex items-center justify-between">
            <span>Services</span>
            <BsChevronDown className="w-4 h-4" />
          </span>
          <ul className="hidden mt-2 ml-0 space-y-2 bg-black text-white rounded-md shadow-lg group-hover:block">
            <h4 className="mb-2 text-lg font-semibold uppercase">Services</h4>
            <li><a className='flex text-white  duration-500' href="/2danimation" target='_main'><BiChevronRight className='mt-1' />2D Animation</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/3danimation" target='_main'><BiChevronRight className='mt-1' />3D Animation</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/explainervideo" target='_main'><BiChevronRight className='mt-1' />Explainer Video</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/framebyframe" target='_main'><BiChevronRight className='mt-1' />Frame By Frame Animation</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/branddesign" target='_main'><BiChevronRight className='mt-1' />Brand Design</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/gamedevelopment" target='_main'><BiChevronRight className='mt-1' />Game Development</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/illustrationandconceptart" target='_main'><BiChevronRight className='mt-1' />Conecept Art & Illustration</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/nftdesign" target='_main'><BiChevronRight className='mt-1' />NFT Creation</a></li>
            <li><a className='flex text-white hover:text-orange-500 duration-500' href="/graphicdesign" target='_main'><BiChevronRight className='mt-1' />Graphic Design</a></li>
            <li className="py-2 px-4">
              <h4 className="mb-2 text-lg font-semibold uppercase">Services</h4>

              <ul>
                <li><a className='flex text-white hover:text-orange-500 duration-500' href="/corporatevideo" target='_main'><BiChevronRight className='mt-1' />Corporate Video</a></li>
                <li><a className='flex text-white hover:text-orange-500 duration-500' href="/commercialvideo" target='_main'><BiChevronRight className='mt-1' />Commercial Video</a></li>
                <li><a className='flex text-white hover:text-orange-500 duration-500' href="/educationalvideo" target='_main'><BiChevronRight className='mt-1' />Educational Video</a></li>
                <li><a className='flex text-white hover:text-orange-500 duration-500' href="/animatedvideo" target='_main'><BiChevronRight className='mt-1' />Animated Music Video</a></li>
                <li><a className='flex text-white hover:text-orange-500 duration-500' href="/medicalvideo" target='_main'><BiChevronRight className='mt-1' />Medical Video</a></li>
              </ul>
            </li>
            <li className="py-2 px-4">
              <h4 className="mb-2 text-lg font-semibold uppercase">Services</h4>

              <ul className="space-y-2">
                <li><a href="/services/service7">Web Development</a></li>
                <li><a href="/services/service8">Digital Marketing</a></li>
                <li><a href="/services/service9">App Development</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold">
          <a href="/blog">Blogs</a>
        </li>
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold">
          <a href="/team">Our Team</a>
        </li>
        <li className="p-6 text-lg hover:text-orange-600 duration-200 font-semibold">
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  )
}
export default App