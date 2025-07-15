import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { backEndUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list, setList] = useState([])


  const fitchList = async () => {
    try {

      const response = await axios.get(backEndUrl + '/api/product/')

      if (response.data.success) {
        setList(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }

  const removeProduct = async (id) => {


    try {

      const response = await axios.post(backEndUrl + '/api/product/remove',{id},{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        fitchList()
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }

  }


  useEffect(() => {
    fitchList()
  }, [])


  return (
    <>

    <p className='mb-2'>All Products</p>



      <div className='flex flex-col gap-2'>
            <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 text-sm p-2 border items-center'>

        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>
{
      list.map((item,index)=>(
        <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-3 border text-sm' key={index}>
          <img className='w-12' src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>

        </div>
      ))

}
    </div>

    </>
  )
}

export default List