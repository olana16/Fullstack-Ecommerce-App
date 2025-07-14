import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col gap-4 items-start w-full'>

      <div>
        <p className='mb-2 mt-2'>Upload Image</p>
        <div className='flex gap-2'>

          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p >Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' />
      </div>

       <div className='w-full'>
        <p >Description </p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Content here' />
      </div>

      <div>
        <div>

          <p>Product Category</p>
          <select className='w-full max-w-[500px] px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            </select>

            <p>Product Category</p>
          <select className='w-full max-w-[500px] px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winter">Winter</option>
            </select>
        </div>
      </div>
    </form>
  )
}

export default Add