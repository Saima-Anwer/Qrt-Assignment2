import React from 'react'
import Header from './component/Header/Header'
import Hero from './component/Hero_section/Hero'
import Footer from './component/Footer/Footer'
import Link from 'next/link'


const Home = () => {
  return (
  <div className='bg-orange-100 flex h-screen flex-col'>
                     <Header/>
                      <Hero/>
                     <Footer/>
    </div>
  )
  
}

export default Home;   