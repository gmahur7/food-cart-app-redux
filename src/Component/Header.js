"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const path = usePathname()
  return (
    <header className='mx-auto w-full bg-primary'>
      <div className='container mx-auto flex justify-between items-center px-10 py-3'>
        <div>
          <Image src="/images/logo.png" alt="logo" width={60} height={60} />
        </div>
        <div className='md:hidden text-white'>
          <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="M19.296 16.608c.386 0 .7.312.7.696a.698.698 0 0 1-.7.696H.7a.698.698 0 0 1-.7-.696c0-.384.313-.696.7-.696h18.596ZM4.033 6.625a.698.698 0 0 1-.003.987L1.697 9.944l2.32 2.32a.698.698 0 0 1-.003.987a.698.698 0 0 1-.987.003L.216 10.442a.698.698 0 0 1 .002-.987l2.828-2.827a.698.698 0 0 1 .987-.003ZM19.3 9.131c.387 0 .7.312.7.696a.698.698 0 0 1-.7.696H5.183a.698.698 0 0 1-.7-.696c0-.384.313-.696.7-.696H19.3ZM19.296 2c.386 0 .7.312.7.696a.698.698 0 0 1-.7.696H.7a.698.698 0 0 1-.7-.696C0 2.312.313 2 .7 2h18.596Z"></path>
              </svg>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8 items-center">
              <div className='mt-16'>
                <Image src="/images/logo.png" alt="logo" width={45} height={45} />
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <Link href="/" className={`${path === '/' ? 'text-[#216BE8] border-b-2 border-[#216BE8]':'text-white'} capitalize font-medium hover:bg-[#216BE8] transition-all`}>Home</Link>
                <Link href="/store" className={`${path === '/store' ? 'text-[#216BE8] border-b-2 border-[#216BE8]':'text-white'} capitalize font-medium hover:bg-[#216BE8] transition-all`}>Store</Link>
                <Link href="/cart" className={`${path === '/cart' ? 'text-[#216BE8] border-b-2 border-[#216BE8]':'text-white'} capitalize font-medium hover:bg-[#216BE8] transition-all`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" >
                    <path fill="currentColor" d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z"></path>
                  </svg>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className='hidden md:flex gap-8 text-white'>
          <nav className='flex gap-16'>
            <Link href="/" className={`${path === '/' && 'text-[#216BE8] border-b-2 border-[#216BE8]'} capitalize font-medium hover:bg-[#216BE8] transition-all `}>Home</Link>
            <Link href="/store" className={`${path === '/store' && 'text-[#216BE8] border-b-2 border-[#216BE8]'}`}>Store</Link>
            <Link href="/cart" className={`${path === '/cart' && 'text-[#216BE8] border-b-2 border-[#216BE8]'}px-5`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" >
                <path fill="currentColor" d="M14 13.1V12H4.6l.6-1.1l9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5S5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z"></path>
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header