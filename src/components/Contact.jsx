import React from 'react'
import style from './../style/contact.module.css'
import { useForm, ValidationError } from '@formspree/react';
import ContactImg from './../assets/contactImg.jpg'

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqwwdyz");
  if (state.succeeded) {
      return <div className={style.container}>
                <p>Thanks for joining!</p>;
                <a href="https://porfolio-theta-ten.vercel.app/" >
                  <button>Home Page</button>
                </a>
              </div>
  }
  return (
    <div name='contact' className={style.container}>
        <form onSubmit={handleSubmit} action='https://formspree.io/f/xnqwwdyz' method="post">
            <div className='pb-8'>
                <p className={style.contactTitle}>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - julio.siklander@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' required />

            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder='Email' name='email' required />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            <textarea id="message" name='message' rows="1" placeholder='Message' required></textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />

            <button type="submit" disabled={state.submitting} className={style.submitBtn}>Let's Collaborate</button>
        </form>
        <div className={style.contactImg}><img src={ContactImg} alt="Html icon"></img></div>
    </div>
  )
}

export default ContactForm