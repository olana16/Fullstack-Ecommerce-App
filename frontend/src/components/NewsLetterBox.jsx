import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and Get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, 
            officiis tenetur optio nostrum ipsum saepe repelle</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" placeholder='enter your email' className='w-full sm:flex-1 outline-none' required/>
                <button type='submit' className='bg-black text-white px-10 py-4 text-xs'>SUBSCRIBE</button>
            </form>
    </div>
  )
}

export default NewsLetterBox