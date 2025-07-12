import React from 'react'
import { useState } from 'react'

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onSubmitHandler = (e) => {
    try {
         e.preventDefault();  
         console.log(email, password);


    } catch (error) {
        
    }
}
      


  return (
    <div className='min-h-screen w-full flex items-center justify-center h-screen'>   
    <div className='bg-white rounded-lg px-8 py-6 shadow-md max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Email Adress</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
            </div>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Password </p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='password' required />
            </div>
            <button className='mt-2 text-white w-full bg-black rounded-lg py-2' type='submit'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login