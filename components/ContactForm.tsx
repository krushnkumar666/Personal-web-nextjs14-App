import React from 'react'

const ContactForm = () => {
  return (
    <form action="">
        <h2 className='text-2xl font-bold mb-5 text-white '>Contact Me</h2>
        <div className='mb-3'>
            <input type="text" placeholder='Your Name' name='name'
            className='w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
        </div>
        <div className='mb-3'>
            <input type="email" placeholder='Email' name='email'
            className='w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
        </div>
        <div className='mb-3'>
            <input placeholder='Your Message' name='message'
            className='w-full px-3 py-2 text-sm text-gray-500 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
        </div>
        <button className='px-6 py-3 mb-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>send</button>
    </form>
  )
}

export default ContactForm