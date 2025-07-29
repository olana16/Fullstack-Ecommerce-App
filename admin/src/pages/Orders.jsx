import React, { useEffect, useState } from 'react'
import axios from 'axios'
import backEndUrl from '../App'

const Orders = (token) => {

  const [orders, setOrders] = useState( [])


  const fetchAllOrders = async () =>{

    if(!token){
      return null
    }

    try {

      const response = await axios.post(backEndUrl + '/api/order/list',{},{headers:{token}})
      
      
    } catch (error) {
      
    }


  }


  useEffect(()=>{

    fetchAllOrders()

  },[token])


  return (
    <div>
        
    </div>
  )
}

export default Orders