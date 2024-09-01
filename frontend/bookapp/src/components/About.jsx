import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>BookNest: Your Personal Reading  <span className='text-pink-500'>Haven</span></h1>
          <p className='mt-12'>
            Introducing BookNest: Your Personal Reading Haven! Dive into a world of endless stories, knowledge, and inspiration with our app, designed for book lovers of all kinds. Whether you're a passionate reader, a casual browser, or someone looking to explore new genres, BookNest offers a seamless and personalized experience. Discover a vast library of books, from timeless classics to the latest bestsellers, all at your fingertips. Curate your own digital bookshelf, track your reading progress, and join a community of fellow readers. With features like personalized recommendations, offline reading, and interactive discussions, BookNest is more than just an app — it's your gateway to a universe of literature. Start your reading journey today and let every page turn into an adventure!
          </p>
        </div>
      </div>
    </>
  )
}

export default About