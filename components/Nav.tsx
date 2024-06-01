import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Nav() {
  return (
      <div className=' h-fit w-2/6  '>
        <form className='flex flex-col justify-center items-center'>
        <Input type='email' placeholder='Email*' required={true} className='mt-2'/>
        <Input type='password' placeholder='Password*' required={true} className='mt-2'/>
        <Button className='mt-2'>Login</Button>
        </form>
    </div>
  )
}
