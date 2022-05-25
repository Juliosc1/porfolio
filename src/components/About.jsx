import React from 'react'
import profileImg from './../assets/profile.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Julio, nice to meet you. Please take a look around</p>
                </div>
                <img className='w-40 mx-auto' src={profileImg} alt="Html icon"></img>
                <div>
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