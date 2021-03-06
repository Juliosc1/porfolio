import React from 'react'
import style from './../style/work.module.css'
import PortfolioImg from './../assets/portfolioWork.png'
import UnifyImg from './../assets/unifyWork.png'
import CodeNordicImg from './../assets/codeNordic.png'
import WeatherImg from './../assets/weatherIcon.png'
import RpsGameImg from './../assets/rpsGame.png'
import RetroImg from './../assets/retroGame.jpg'

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
                <div style={{backgroundImage: `url(${PortfolioImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} 
                className={style.item}>
                   
                    {/*Hover effects*/}
                    <div className={style.projectBox}>
                        <div className={style.textBox}>
                            <span className={style.portfolioText}>
                                Portfolio
                            </span>
                            <p>This is my portfolio porject. <br/> 
                            Here I use Tailwind for the first time together with CSS.</p>
                        </div>
                        <div className={style.btnContainer}>
                            <a href="https://juliosiklander.vercel.app/" target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Demo</button>
                            </a>
                            <a href='https://github.com/Juliosc1/porfolio' target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/*Grid Item*/}
                 <div style={{backgroundImage: `url(${UnifyImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} 
                className={style.item}>
                   
                    {/*Hover effects*/}
                    <div className={style.projectBox}>
                        <div className={style.textBox}>
                            <span className={style.portfolioText}>
                                Unify Project
                            </span>
                            <p>Collaborate with Ux designer.
                            People can create events to make it easier to meet new people.
                            The website is intended to run in mobile mode.</p>
                        </div>
                        <div className={style.btnContainer}>
                        <a href="https://unify-sti.vercel.app" target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Demo</button>
                            </a>
                            <a href='https://github.com/Juliosc1/unify' target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${CodeNordicImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} 
                className={style.item}>
                   
                    {/*Hover effects*/}
                    <div className={style.projectBox}>
                        <div className={style.textBox}>
                            <span className={style.portfolioText}>
                                My first HTML & CSS project
                            </span>
                            <p>Here is my very first project where I use only html and css</p>
                        </div>
                        <div className={style.btnContainer}>
                            <a href='https://github.com/Juliosc1/teamnordic' target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${WeatherImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} 
                className={style.item}>
                   
                    {/*Hover effects*/}
                    <div className={style.projectBox}>
                        <div className={style.textBox}>
                            <span className={style.portfolioText}>
                                Weather app - Coming soon!
                            </span>
                            <p>Wondering what the weather will be like today.
                               In this React project you can check what the weather will be like.
                               Intended to drive in mobile view</p>
                        </div>
                        <div className={style.btnContainer}>
                            
                        </div>
                    </div>
                </div>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${RpsGameImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} 
                className={style.item}>
                   
                    {/*Hover effects*/}
                    <div className={style.projectBox}>
                        <div className={style.textBox}>
                            <span className={style.portfolioText}>
                                RPS Game.
                            </span>
                            <p>Press: Start game, and start playing the classic Rock Paper and Scissors game.</p>
                        </div>
                        <div className={style.btnContainer}>
                        <a href="https://julio-frontend.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Demo</button>
                            </a>
                            <a href='https://github.com/Juliosc1/sti-frontend' target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${RetroImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} 
                className={style.item}>
                   
                    {/*Hover effects*/}
                    <div className={style.projectBox}>
                        <div className={style.textBox}>
                            <span className={style.portfolioText}>
                                DinosaurBattle
                            </span>
                            <p>Coded in Java, a little mine game</p>
                        </div>
                        <div className={style.btnContainer}>
                            <a href='https://github.com/Juliosc1/DinosaurBattle' target="_blank" rel="noreferrer noopener">
                                <button className={style.demoCodeBtn}>Code</button>
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