import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Nav() {
  return (
      <div className='w-full h-24 bg-black '>
        <Button className='text-white'>Sign in</Button>
        <Button>Sign Up</Button>
    </div>
  )
}
