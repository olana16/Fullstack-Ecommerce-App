import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='flex items-center px-8 py-2 justify-between'> 
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="admin logo" />
        <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>LogOut</button>
    </div>
  )
}

export default Navbar