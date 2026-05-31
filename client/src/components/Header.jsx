import React from 'react'
import { assets } from '../assets/assets'
const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex test-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="header image" />
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-500'>images</span>, in seconds</h1>
        <p className='text-gray-500 mt-6 text-sm sm:text-base'>Create stunning images with our AI-powered text-to-image generator. Transform your ideas into visuals effortlessly.</p>
    </div>
  )
}

export default Header
