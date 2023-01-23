import React from 'react'
import { kidbook } from '../assets'
import styles from '../style'

const Hero = () => {
  return (
    <section className='h-screen'>
      <div className='h-full w-full text-white'>
        <img src={kidbook} alt="" className='absolute h-full w-full object-cover object-center' />
        <div className='bg-gray-800 bg-opacity-10 flex items-center relative w-full h-full'>
          <div className={`${styles.paddingY}`}>
            <div className={`flex ${styles.flexCenter} xl:px-0 sm:px-16 px-6`}>
              <div className=' w-full h-full'>
                <div className='h-[4px] w-[100px] bg-white mb-10'></div>
                <h1 className='font-extrabold ss:text-[68px] text-[40px] ss:leading-[100px]'>A L - I R S H A D </h1>
                <br />
                <p className='text-sm tracking-wide leading-relaxed font-semibold mt-2 text-white'>This is where we teach students the skills they need to transform themselves, others and our global communities.</p>
                <p className='text-sm tracking-wide leading-relaxed font-semibold mt-2 md:block md:max-w-lg'>we set a clear path <span className='font-extrabold tracking-widest'>FORWARD</span> to ensure all of our students succeed.</p>
                <br />
                <button className='flex mt-2 bg-white py-4 px-10 items-center justify-center text-black text-sm font-bold tracking-wider shadow-md hover:bg-secondary hover:text-white transition ease-out duration-500 cursor-pointer'> Enroll Now! </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero