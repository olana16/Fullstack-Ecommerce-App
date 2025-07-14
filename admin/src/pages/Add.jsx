import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios';
import { backEndUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);


  const onSubmitHandler = async (e) => {
    try {


      e.preventDefault();
      const formData = new FormData();
      image1 & formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('price', price);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestseller', bestseller);

      const response = await axios.post(backEndUrl + '/api/product/add', formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setBestseller(false)
        setCategory('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }
      else {
        toast.error(response.data.message)

      }
    } catch (error) {
      toast.error(error.message)

    }
  }


    return (
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 items-start w-full'>

        <div>
          <p className='mb-2 mt-2'>Upload Image</p>
          <div className='flex gap-2'>

            <label htmlFor="image1">
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
              <img onChange={(e) => setImage3(e.target.files[0])} className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
              <img onChange={(e) => setImage4(e.target.files[0])} className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input type="file" id="image4" hidden />
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p >Product Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
        </div>

        <div className='w-full'>
          <p >Description </p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Content here' required />
        </div>

        <div className='flex flex-col gap-2 sm:flex-row sm:gap-8'>
          <div>

            <p className='mb-2'>Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full max-w-[500px] px-3 py-2'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className='mb-2'>Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full max-w-[500px] px-3 py-2'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winter">Winter</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>Price</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder="25" />
          </div>
        </div>

        <div>
          <p className='mb-2'>Product Sizes</p>
          <div className='flex gap-2'>

            <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(size => size !== 'S') : [...prev, 'S'])} className={`cursor-pointer ${sizes.includes('S') ? 'bg-black text-white' : ''}`}>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(size => size !== 'M') : [...prev, 'M'])} className={`cursor-pointer ${sizes.includes('M') ? 'bg-black text-white' : ''}`}>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
            </div>


            <div onClick={() => setSizes(prev => prev.includes('L') ? prev.filter(size => size !== 'L') : [...prev, 'L'])} className={`cursor-pointer ${sizes.includes('L') ? 'bg-black text-white' : ''}`}>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes('XL') ? prev.filter(size => size !== 'XL') : [...prev, 'XL'])} className={`cursor-pointer ${sizes.includes('XL') ? 'bg-black text-white' : ''}`}>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes('XXL') ? prev.filter(size => size !== 'XXL') : [...prev, 'XXL'])} className={`cursor-pointer ${sizes.includes('XXL') ? 'bg-black text-white' : ''}`}>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-2'>
          <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
          <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
        </div>
        <button type='submit' className='w-28 py-2 mt-4 bg-black  text-white'>ADD</button>
      </form>
    )
  }

  export default Add