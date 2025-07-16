import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up')
  const { token, setToken, navigate, backEndUrl } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    event.preventDefault()

    if (currentState === "Sign Up") {


      try {

        const response = await axios.post(backEndUrl + '/api/user/register', { name, email, password })
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          
        }else{
          toast.error(response.data.message)
        }

      } catch (error) {

        toast.error(error.message)

      }

    }else{

      try {
        
        const response = await axios.post(backEndUrl + '/api/user/login', { email, password })
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)

        }
        else{
          toast.error(response.data.message)
        }
      } catch (error) {

        toast.error(error.message)
        
      }
    }

  }



  useEffect(()=>{
    if (token) {
      navigate('/')
    }

  },[token])
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none font-sans h-[1.5px] w-8 bg-gray-800' />

      </div>
      {currentState === "Login" ? " " :
        <input onChange={(e) => setName(e.target.value)} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required value={name} />}
      <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required value={email} />
      <input onChange={(e) => setPassword(e.target.value)} type="Passworp" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required value={password} />
      <div className='flex justify-between w-full  text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {currentState === "Login" ? <p className='cursor-pointer' onClick={() => setCurrentState("Sign Up")}>Create Account here</p>
          : <p className='cursor-pointer' onClick={() => setCurrentState("Login")}> Login here</p>}

      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login" ? "Sign In" : "Sign Up"}</button>


    </form>
  )
}

export default Login