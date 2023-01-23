import React from 'react'
import { quote } from '../constants'
import styles from '../style'
import {CgQuote} from 'react-icons/cg'

const Quotes = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <div className='h-[4px] w-[100px] bg-red-500 mb-10'></div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6'>
        <h1 className={`font-semibold xs:text-[24px] text-[20px] xs:leading-[34px] leading-[33.4px] w-full text-black text-center`}>few of our favourites Quotes</h1>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center'>
        {quote.map((quote) => (
          <div key={quote.id} className={'w-full flex justify-between flex-col px-10 py-12 rounded-md max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer text-sm hover:bg-gray-900 hover:bg-opacity-5 transition ease-in-out duration-200'}>
            <CgQuote className='w-[42px] h-[27px] object-contain text-secondary'/>
            <p className='font-semibold text-[18px] leading-[32px] my-10'>{quote.content}</p>
          </div>
        ))}

      </div>
      
    </section>
  )
}

export default Quotes