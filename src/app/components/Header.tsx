'use server';
import React from 'react'
import Link from "next/link";
import {CalendarDays} from 'lucide-react'
import { session } from '@/libs/session';
import RightNav from './RightNav';


export default async function Header() {
  const email=await session().get('email');
 
  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600 font-light">
      <div className="flex items-center gap-10">
      <Link href={'/'} className="text-blue-600 font-bold text-2xl flex gap-2 items-center" >
      <CalendarDays size={24} />
      Calendix
      </Link>
      <nav className="flex gap-4">
        <Link href={'/features'}>Features</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/pricing'}>Pricing</Link>
      </nav>
      </div>
    
    <RightNav email={email} /> 
    </header>
  )
}
