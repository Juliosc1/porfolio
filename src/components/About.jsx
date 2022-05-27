import React from 'react'
import style from './../style/about.module.css'
import profileImg from './../assets/profile.jpg'

const About = () => {
  return (
    <div name='about' className={style.container}>
        <div className={style.innerContainer}>
            <div className={style.item1}>
                <div className={style.item1Text}>
                    <p>About</p>
                </div>
            </div>
            <div className={style.item2}>
                <div className={style.item2Text}>
                    <p>Hi. I'm Julio, nice to meet you. Please take a look around.</p>
                </div>
                <img src={profileImg} alt="Html icon"></img>
                <div className={style.presentation}>
                    <p>I am currently studying Java programming at Stockholms Tekniska Institut. 
                        I have a good ability to work together and i think it's fun to work in teams 
                        where we find solutions together and exchange experiences with each other.
                    </p>
                    <p className='mt-4'>I would love to meet and to be able to introduce myself in more detail
                        and listen to how you work to see if we can find a match. 
                    </p>
                    <p className='mt-4 italic'>Julio Siklander</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About