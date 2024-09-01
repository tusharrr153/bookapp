import React from 'react'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className='min-h-screen'>
        <Contact />
      </div>
      <Footer className="mt-1"></Footer>

    </>
  )
}

export default ContactUs;