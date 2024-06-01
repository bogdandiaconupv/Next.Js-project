import ConvexClientProvider from '@/providers/ConvexClientProvider';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import React from 'react'

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="h-full w-full flex items-center justify-center ">
           {children}
      </div>
    );
  };
  
  export default ClerkLayout;