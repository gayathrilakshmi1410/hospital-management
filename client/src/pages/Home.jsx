import React from 'react'
import Slider from '../components/Slider/Slider'
import Facility from '../components/Static/Facility/Facility'
import ShortIntro from '../components/Static/ShortIntro/ShortIntro'
import WhyChoose from '../components/Static/WhyChoose/WhyChoose'
import ContactMessage from '../components/Static/ContactMessage/ContactMessage'
import PatientReviews from '../components/Static/PatientReviews/PatientReviews'
const Home = () => {
  return (
    <>
    {/* //slider */}
    <Slider/>
    {/* facility */}
    <Facility/>
    {/* short hospital intro */}
    <ShortIntro/>
    {/* why choose us */}
    <WhyChoose/>
    {/* testinomial */}
    <PatientReviews/>
    {/* contact */}
    <ContactMessage/>
    </>
  )
}

export default Home
