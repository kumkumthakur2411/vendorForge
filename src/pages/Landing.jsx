import React from 'react'
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWork';
import WhyChooseUs from '../components/WhyChooseUs';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


export const Landing = () => {
  return (
  <>
    
    <HeroSection></HeroSection>
    <HowItWorks></HowItWorks>
    <WhyChooseUs></WhyChooseUs>
    <Categories></Categories>
    <Testimonials></Testimonials>
    <Footer></Footer>
  </>
  )
}
export default Landing;