import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
  const { productId } = useParams()
  const { products, currency,addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState()
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')



  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })

  }


  useEffect(() => {

    fetchProductData();

  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100'>

      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product image */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[25%] sm:w-full m-1 sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>

        </div>
        {/* Product information */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-5'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium'> {currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Selecte Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}

            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Orginal Product</p>
            <p>Cash on dilvery is avaliable on this product</p>
            <p>Easy return and exchange policy within 7 day</p>
          </div>
        </div>
      </div>

      {/* Desrcription and review seection */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Desciption</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service</p>
          <p>An e-commerce website display is a digital storefront that allows businesses to sell products and services online. It's designed to make the buying and selling process convenient and efficient.</p>
        </div>

      </div>
      {/* display related product */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product