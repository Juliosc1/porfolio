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
                <div className={style.presentaion}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae maiores eius quo nisi impedit delectus voluptas laudantium optio rerum 
                        repellendus officia possimus nostrum non unde vitae totam soluta libero, 
                        deserunt ab placeat magni perferendis. Dolor eaque explicabo sapiente quidem, 
                        illum ex reiciendis neque error, 
                        soluta praesentium exercitationem ea dignissimos minus!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About