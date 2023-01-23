import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {HiMail, HiPhone} from "react-icons/hi"
import { navLinks, compLinks, supportLinks } from '../constants'

const Footer = () => {
  return (
    <section>
      <div className='h-[1px] w-full bg-red-500 mb-10'></div>
      <div className='bg-primary text-white w-full flex flex-col md:flex-row justify-around'>
        <div className='p-6'>
          <ul>
            <p className='font-bold text-2xl pb-2 text-secondary'>AL - IRSHAD School</p>
            <p className='text-black'>Olosun Bembo Way Apata</p>
            <p className='text-black'>Ibadan, Nigeria.</p>
            <br />
            <div className='flex gap-6 pb-5'>
              <a href="mailto:aabdulrasheed113@gmail.com" className='border-none transition-none text-black'><HiMail className='text-xl cursor-pointer transition hover:text-secondary hover:scale-150'/></a>
              <a href="https://wa.me/2348059541147" className='border-none transition-none text-black'><FaWhatsapp className='text-xl cursor-pointer transition hover:text-secondary hover:scale-150'/></a>
              <a href="tel:08059541147" className='flex text-sm border-none transition-none text-black'><HiPhone className='text-xl cursor-pointer transition hover:text-secondary hover:scale-150'/>&nbsp;0805-954-1147</a>
            </div>
          </ul>
        </div>
        <div className='p-6 text-black'>
          <ul>
            <p className='font-bold text-xl mb-4'>Useful Links</p>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`text-xs tracking-widest font-semibold cursor-pointer mb-3`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      {/* <div className='p-6 text-black'>
        <ul>
          <p className='font-bold text-xl mb-4'>Company</p>
          {compLinks.map((comp, index) => (
              <li key={comp.id} className={`text-xs tracking-widest font-semibold cursor-pointer mb-3`}>
                  <a href={`#${comp.id}`}>
                    {comp.title}
                  </a>
              </li>
            ))}
        </ul>
      </div> */}
      <div className='p-6 text-black'>
        <ul>
          <p className='font-bold text-xl mb-4'>Contact Us</p>
          {supportLinks.map((support, index) => (
              <li key={support.id} className={`text-xs tracking-widest font-semibold cursor-pointer mb-3`}>
                  <a href={`#${support.id}`}>
                    {support.title}
                  </a>
              </li>
            ))}
        </ul>
      </div>

    </div>
    </section>
  )
}

export default Footer