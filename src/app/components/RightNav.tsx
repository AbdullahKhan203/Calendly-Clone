'use client';
import Link from "next/link"

export default function RightNav({email}:{email:string}){
    const hashedLoggedOut=location.href.includes('logged-out')
    
    if(email && !hashedLoggedOut){
        return(
            <nav className="flex items-center gap-4">
            <Link href={'/dashboard'} className="bg-blue-600 text-white p-2 py-2 px-4 rounded-full">Dashboard</Link>
            <a href={'/api/logout'}>Logout</a>
          </nav>
        )
    }
    else{
        return(
<nav className="flex items-center gap-4">
        <Link href={'/api/auth'}>Sign in</Link>
        <Link href={'/about'} className="bg-blue-600 text-white p-2 py-2 px-4 rounded-full">Get Started</Link>
      </nav>
        )
    }
     
}
