"use client"

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'
import { Darker_Grotesque } from 'next/font/google'

export default function Nav() {
  const router= useRouter();

  const { user, isSignedIn} = useUser()
  
  return (
      <div className='w-full h-24 bg-black '>
        {!isSignedIn && (
                <>
                    <Button onClick={() => router.push('/sign-in')} className='text-white'>
                        Sign in
                    </Button>
                    <Button>
                        Sign Up
                    </Button>
                </>
            )}
        <div className="w-fit h-fit  absolute">

          <UserButton  />
        </div>
    </div>
  )
}
