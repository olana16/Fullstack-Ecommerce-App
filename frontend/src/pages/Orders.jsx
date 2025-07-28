import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { toast } from 'react-toastify'

const Orders = () => {

  const { currency, backEndUrl, token } = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])


  const loadOrderData = async () => {



    try {


    if (!token) {

      return null
    }

      const response = await axios.post(backEndUrl + '/api/order/userorders', {}, { headers: { token } })

      if (response.data.success) {
        let allOrderItems = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrderItems.push(item)
          })
        })
        setOrderData(allOrderItems.reverse())
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }


  }

  useEffect({

    loadOrderData
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />

      </div>

      <div>
        {
          orderData.map(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:text-center md:justify-between gap-4'>
              <div className='flex item-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>{item.quantity}</p>
                    <p>{item.size}</p>

                  </div>
                  <p className='mt-2 text-start'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString(item.date)}</span></p>
                </div>

              </div>

              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-gray-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-2 py-2 text-sm font-medium rounded-sm'>TRACK ORDERS</button>

              </div>

            </div>

          )

          )
        }
      </div>

    </div>
  )
}

export default Orders