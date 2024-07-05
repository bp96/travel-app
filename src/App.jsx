import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import DestinationGrid from './components/DestinationGrid'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Destinations />
        <Search />
        <DestinationGrid />
        <Carousel />
        <Footer />
    </div>
  )
}

export default App
