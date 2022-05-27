import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xnqwwdyz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an eamil - julio.siklander@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='name' name='name' />
            <label htmlFor="email"></label>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" id="email" placeholder='email' name='email' />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
            <textarea className='bg-[#ccd6f6] p-2' id="message" name='message' rows="10" placeholder='Message'></textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact