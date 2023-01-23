import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        <p className='w-full text-center mt-16 mb-4 font-semibold xs:text-[24px] text-[20px] xs:leading-[34px] leading-[33.4px]'>AL - IRSHAD school at a glance</p>
        <br />
        {stats.map((stat) => (
            <div key={stat.id} className='mt-6 w-1/3 text-center'>
                <h4 className='font-bold xs:text-[40px] sm:text-[60px] xs:leading-[53px] leading-[43px] text-secondary mr-3'>{stat.value}</h4>
                <p className='text-xs text-gray-800 sm:text-sm mt-3 font-semibold'>{stat.title}</p>
            </div>
        ))}
    </section>
  )

export default Stats