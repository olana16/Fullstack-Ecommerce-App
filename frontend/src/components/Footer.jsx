import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-500'>Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Consequuntur magni accusantiu
                        m similique praesentium recusandae, exercitationem odit nostrum cum accusamus molestias
                        nihil ullam veniam rem distinctio aliquam commodi vel! Voluptate, nulla.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+251922121466</li>
                        <li>oligeda16@gmail.com</li>

                    </ul>
                </div>
            </div>

            <div>
                <p className='py-5 text-sm text-center border-t'>Copyright@2024 Forever.com- All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer