'use client'

import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary">Premium Agency</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-accent transition">Services</a>
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#expertise" className="hover:text-accent transition">Expertise</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-primary"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#services" className="block hover:text-accent">Services</a>
            <a href="#about" className="block hover:text-accent">About</a>
            <a href="#expertise" className="block hover:text-accent">Expertise</a>
            <button className="btn-primary w-full">Contact</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
