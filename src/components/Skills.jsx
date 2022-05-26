import React from 'react'
import style from './../style/skills.module.css'
import JavaScript from '../assets/javascript.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'
import ReactLogo from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className={style.skillsContainer}>
        {/*Container*/}
        <div className={style.container}>
            <div>
                <p className={style.skillTitle}>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className={style.skillTable}>
                <div className={style.skillBox}>
                    <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className={style.skillBox}>
                    <img className='w-20 mx-auto' src={Css} alt="Html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className={style.skillBox}>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Html icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className={style.skillBox}>
                    <img className='w-20 mx-auto' src={Firebase} alt="Html icon" />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className={style.skillBox}>
                    <img className='w-20 mx-auto' src={Github} alt="Html icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className={style.skillBox}>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="Html icon" />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills