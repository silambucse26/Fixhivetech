import React from 'react'
import HeroSlider from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import Categories from '../../Components/Categories/Categories'
import FixhiveServices from '../../Components/Why/Why'
import ServicesSection from '../../Components/Categories/Categories'
import WhyFixhive from '../../Components/Why/Why'
import HowItWorks from '../../Components/How/How'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSlider />
        <WhyFixhive />
        <ServicesSection />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default Home