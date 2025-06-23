import React from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'


const Home = () => {
  const catagories = [
  "All",
  "Graphic Cards",
  "Leptop",
  "Monitors",
  "Power Supply",
  
]
  return (
    
        <>
        <div className="bg"></div>
            <div className="container mx-auto my-10  px-4 ">
              <div className="flex gap-4 ">
                {catagories.map( (cat, index) => {
                  return (
                    <button className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 
                     hover:bg-zinc-400 transition-all ease-in'
                     key={index}>
                      {cat}
                     </button>

                  )
                } )}
              </div>
              <ProductGrid />
            </div>
        
        </>
    
  )
}

export default Home