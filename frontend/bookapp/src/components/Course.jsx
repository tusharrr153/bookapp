import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!</span></h1>
          <p className='mt-12'>
            Welcome to our Course Section, where learning meets innovation! Dive into a diverse range of subjects tailored to enrich your knowledge and skills. Our carefully curated courses are designed for learners of all levels, from beginners to advanced professionals. Whether you're interested in technology, business, arts, or science, we have something for everyone.
          </p>
          <Link to={"/"}>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link>

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Course