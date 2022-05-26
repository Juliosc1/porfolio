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
                <p className='pt-4 pb-0'>These are my educational experince.</p>
            </div>

            <div className={style.skillTable}>
                
                <div className={style.item1}>
                        <h3 className='text-2xl sm:text-4xl font-bold text-[#ccd6f6] mt-8'>Education</h3>
                        <p className='text-xl sm:text-2xl font-bold text-[#8892b0]'>Stockholm Tehnical Institute - Java developer</p>
                    </div>
                <div className={style.item2}>
                    <div className='flex flex-col justify-center'>
                        <p className='text-lg font-bold text-center mt-3'>Finished courses:</p>
                        <div className='flex flex-row gap-4 mt-3 mb-8'>
                            <div className={style.innerItem2}>
                            <p className='text-base leading-8'> - Programming basic course <br />
                                - Java programming A <br />
                                - Database management <br />
                                - Java programming B <br />
                                - HTML & CSS <br />
                                </p>
                            </div>
                            <div className={style.innerItem2}>
                            <p className='text-base leading-8'> 
                                - JavaScript and Webb communication <br />
                                - Test driven development <br />
                                - Javascript and frameworks <br />
                                - Agile project management
                                </p>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className={style.item3}>
                    <p className='text-lg font-bold mt-3 mb-8'>Courses yet to be:</p>
                    <p className='text-base leading-8'>- Basic IT security <br/>
                    - Webservices in Java <br/>
                    - Java Entreprise and Eclipse
                    </p>
                </div>
              
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