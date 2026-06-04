import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex test-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="header image" />
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-500'>images</span>, in seconds</h1>
        <p className='text-gray-500 mt-6 text-sm sm:text-base'>Create stunning images with our AI-powered text-to-image generator. Transform your ideas into visuals effortlessly.</p>
        <button className='sm:test-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
            Generate Images
            <img className='h-6' src={assets.star_group} alt="Star group" />
        </button>

        <div className='flex flex-wrap justify-center gap-3 mt-16'>
            {Array(6).fill('').map((item,index) => (
                <img key={index} className='rounded-hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                 src={index%2 ===0 ? assets.sample_img_1 : assets.sample_img_2}
                 alt="star" width={70} />
            ))}
        </div>

        <p className='text-neutral-600 mt-2'>Generated images form Imagify</p>
    </div>
  )
}

export default Header
