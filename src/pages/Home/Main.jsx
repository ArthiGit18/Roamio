import React from 'react'
import Banner from './Banner'
import Details from './Details'
import Offers from './Offers'
import Gallery from './Gallery'
import Faq from './Faq'
import ToursSlider from './ToursSlider'
import ContactNewsletter from './ContactNewsletter'
import Footer from './Footer'
import Newsletter from './Newsletter'

const Main = () => {
  return (
    <div>
        <Banner />
        <Offers />
        <Gallery />
        <Faq />
        <ToursSlider />
        <Newsletter />
        {/* <ContactNewsletter /> */}
        <Footer />
    </div>
  )
}

export default Main