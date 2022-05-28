import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import style from './../style/navbar.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'
import LogoImg from './../assets/logo.png'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className={style.navbarContainer}>
        <div className={style.nameLogo}>
            <Link to="home" smooth={true} duration={500}>
                <img src={LogoImg} alt="Logo" />
            </Link>
        </div>

        {/*menu*/}
            <ul className={style.meny}>
                <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
                
            </ul>

        {/*hamburger*/}
        <div onClick={handleClick} className={style.hamburger}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden ' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            {!nav ? true : false}
            <li className={style.hamburgerMenyLi}>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className={style.hamburgerMenyLi}>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li className={style.hamburgerMenyLi}>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li className={style.hamburgerMenyLi}>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li className={style.hamburgerMenyLi}>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
            </Link>    
            </li>
        </ul>

        
        {/*social icons*/}
        <div className={style.socialIcons}>
            <ul>
                <li className={style.socialIconsLinkedin}>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://se.linkedin.com/in/julio-siklander-a9883b19b" target="_blank" rel="noreferrer noopener">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className={style.socialIconsGithub}>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/Juliosc1" target="_blank" rel="noreferrer noopener">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className={style.socialIconsMail}>
                    <Link className='flex justify-between items-center w-full text-gray-300'
                        to="contact">
                        Email <HiOutlineMail size={30}/>
                    </Link>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar