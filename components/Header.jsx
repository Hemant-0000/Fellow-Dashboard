import React from 'react'
import Image from 'next/image'
import watermark from '../public/watermark.png'

function Header() {
  return (
    <div className='headcontainer flex flex-wrap h-[70px] bg-[#ffffff] ml-[200px] md:w-[100%] md:ml-[70px]  ' >

      <div className='headwrapper flex justify-evenly items-center ' >
        <div className='title ml-[40px] '>
          <h2 className='text-black ' >Hello, <span>Jenny</span></h2>
          <p className='text-black' >Welcome to the board.</p>
        </div>
      </div>

      <div className='profile absolute right-[20px] mt-[10px] md:right-[5px] '>
        <div className='image w-[40px] h-[40px] rounded-[50%] cursor-pointer  ' ><Image src={watermark} alt='profile' /></div>
      </div>

    </div>
  )
}

export default Header