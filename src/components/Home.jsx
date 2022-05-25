import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Link from 'react-scroll/modules/components/Link'
import style from './../style/home.module.css'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#222629]'>

        {/*container*/}
        <div className={style.homeContainer}>
            <p className='text-orange-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Julio Siklander</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Student Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a student on Stockholms Tekniska Institut. Currently i'm focused on finding Javascript and learning more about React</p>
            <div>
            <Link to="work" smooth={true} duration={500}>
                <button className={style.viewWorkBtn}>View Work 
                    <span className={style.arrowInBtn}>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </Link>
            </div>

        </div>
    </div>
  )
}

export default Home