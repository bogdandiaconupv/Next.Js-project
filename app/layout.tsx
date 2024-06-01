
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeShare",
  description: "Share the fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <ConvexClientProvider>
    <html lang="en">
      <body className="flex h-screen  items-center justify-center ">
          <UserButton />
        {children}
        </body>
    </html>
          </ConvexClientProvider>
  );
}
