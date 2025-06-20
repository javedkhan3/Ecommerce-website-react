import { ShoppingCart, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='bg-white shadow-md'>
      <>
        <div className="shadow-md py-4">
          <ul className='container mx-auto relative flex flex-wrap justify-between md:flex-row px-6 items-center'>
            <div className='flex gap-4 relative'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/FAQs">FAQs</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </div>
            <div className={`${isOpen ? 'flex flex-col absolute right-4 top-12 z-10 rounded bg-zinc-50 p-4 gap-4' : "hidden"}`}>
              <li><Link to="/">Sign</Link></li>
              <li><Link to="/">My Account</Link></li>
            </div>
            <User
              size={40}
              className='bg-gray-200 p-2 text-black rounded cursor-pointer'
              onClick={handleToggle}
            />
          </ul>
        </div>

        <nav className='container flex flex-wrap justify-between items-center  mx-auto px-6'>
          <div className='flex items-center'>
            <Link className='border border-gray-300 rounded-sm'>
              <img src={logo} className='w-44 h-auto' />
            </Link>
          </div>
          <form className='w-1/2 sm:block hidden'>
            <input
              type="text"
              placeholder='Search Products'
              className='bg-zinc-100 rounded-md focus:outline-none py-2 px-4 w-full'
            />
          </form>
          <Link>
            <ShoppingCart size={45} className='bg-gray-100 px-3 py-2 rounded-full cursor-pointer' />
          </Link>
        </nav>
      </>
    </header>
  )
}

export default Navbar
