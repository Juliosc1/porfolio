import React from 'react'
import style from './../style/work.module.css'
import WorkImg from '../assets/workImg.png'
import PortfolioImg from './../assets/portfolioWork.png'

const Work = () => {
  return (
    <div name='work' className={style.container}>
        <div className={style.innerContainer}>
            <div className={style.title}>
                <p className={style.workTitle}>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            
            {/*Container*/}
            <div className={style.gridContainer}>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${PortfolioImg})`}} 
                className={'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'}>
                   
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://porfolio-theta-ten.vercel.app/" target="_blank" rel="noreferrer noopener">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Juliosc1/porfolio' target="_blank" rel="noreferrer noopener">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/*Grid Item*/}
                 <div style={{backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Unify Project
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://unify-sti.vercel.app" target="_blank" rel="noreferrer noopener">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Juliosc1/unify' target="_blank" rel="noreferrer noopener">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work