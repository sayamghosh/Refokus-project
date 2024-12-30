import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='w-full h-full bg-zinc-900 font-["Santosi"]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees /> 
      <Cards />
      <Footer />   
    </div>
  )
}