import React from 'react'
import styles from './style'
import {Hero, Navbar, History, Footer, About, Quotes, Stats} from './components'

const App = () => (
    <div className=' bg-primary w-full overflow-hidden font-ral'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-black`}>
          <Navbar/>
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <About/>
          <History/>
          <Quotes/>
          <Footer/>
        </div>
      </div>
    </div>
  )

export default App