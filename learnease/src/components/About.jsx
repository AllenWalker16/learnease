import React from 'react'
import styles from '../style'

const About = () => {
  return (
    <section className={styles.padding}>
      <div className='h-[4px] w-[100px] bg-red-500 mb-10'></div>
      <h1 className='text-2xl md:text-4xl font-semibold mb-8'>Learning Begins With Us</h1>
      <div className='md:flex w-full justify-between'>
        <div className='md:w-1/2'>
          <h1 className='font-bold'>Our Mission</h1>
          <p className='text-sm leading-8 tracking-wider py-2 sm:leading-[28px]'>we at AL - IRSHAD academy offer supportive and inspirational enviroments for young minds to learn and grow with us. Our passion for learning means we achieve more than outstanding results. we strive to build confident and creative thinkers and aim at delivering an education that promotes academic achievement, leadership and Islamic Values.</p>
        </div>
        <div className='md:w-2/5'>
          <h1 className='font-bold'>Our Vision</h1>
          <p className='text-sm leading-8 tracking-wider py-2 sm:leading-[28px]'>we are an early learning academy focused on building and maintaining a learning community that boasts of leaders through faith, knowledge and inspiration. </p>
        </div>

      </div>
    </section>
  )
}

export default About