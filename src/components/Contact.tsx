import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in touch</h2>
                <p className='text-grey-600 text-[18px] pt-2'>
                    Drop me a line , give me a call, or send me a message by submitting the form.

                </p>
                <div className='flex gap-3 items-center'>
                    <AiOutlineMail size={30}/> shahjarar2022@gmail.com</div>
            </div>
            <div className='flex gap-3 items-center'>
                    <BsTelephone  size={30}/> 021 343434767</div>
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type='h-[20px] bg-transparent boder border-accent'
                id='name'/>

            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type='h-[20px] bg-transparent boder border-accent'
                id='Email'/>

            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="msg">Massege</label>
                <textarea
                className='bg-transparent border border-accent'
                id='Msg' rows={8}>
                    </textarea>

            </div>
            <button className='bg-accent p-2'>Send</button>


        </div>
      </div>

  )
}

export default Contact
