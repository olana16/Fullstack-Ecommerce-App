import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora soluta repudiandae quod veniam, amet vero nam blanditiis hic est itaque, ipsa sed. Corrupti magni autem sit consequuntur rerum maxime?</p>
          <p>Electronic commerce or e-commerce is simply the buying and selling of goods and services using the internet, when shopping online.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We want to empower brands and retailers to pursue a direct-to-consumer model which is seamlessly integrated with their existing B2B supply chain. To do so, we offer E-Commerce services that help our customers save time, avoid high costs and sell more regardless of the season.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus alias quaerat labore inventore provident esse dolorem? Aliquid laborum ea quo, itaque quas.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus alias quaerat labore inventore provident esse dolorem? Aliquid laborum ea quo, itaque quas.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus alias quaerat labore inventore provident esse dolorem? Aliquid laborum ea quo, itaque quas.</p>

        </div>

      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default About