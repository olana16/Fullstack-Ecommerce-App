import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'

const { navigate, token, setCartItem, backEndUrl } = useContext(ShopContext)
const [searchParams, setSearchParams] = useSearchParams()

const success = searchParams.get('sucess')
const orderId = searchParams.get('orderId')
const verifyPayment = async() => {

    try {

        if (!token) {
            return null
        }

        const response = await axios.post(backEndUrl + '/api/order/verifyStripe',{success,orderId},  {headers:{token}})
        if(response.data.success){
            setCartItem({})
            navigate('/orders')
        }else{
            navigate('/cart')
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)

    }

}

useEffect(() => {

    verifyPayment()

}, [token])


const Verify = () => {
    return (
        <div>

        </div>
    )
}

export default Verify