import React from 'react';
import { faBars } from 'react-icons'
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo' style={{ width: '50px' }} />
        </div>

        {/*menu*/}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/*hamburger*/}
        <div className='md: hidden z-10'>
            <faBars />
        </div>

        
        {/*mobile menu*/}
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
            <li className='py-6 text-4x1'>Home</li>
            <li className='py-6 text-4x1'>About</li>
            <li className='py-6 text-4x1'>Skills</li>
            <li className='py-6 text-4x1'>Work</li>
            <li className='py-6 text-4x1'>Contact</li>
        </ul>

        
        {/*social icons*/}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar