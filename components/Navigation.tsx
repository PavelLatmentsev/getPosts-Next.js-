"use client"

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";


type NavLink = {
    label:string;
    href:string
}

type Props = {
navLink:NavLink[]
}
const Navigation = ({navLink}: Props) => {
    const pathname = usePathname();
    const session = useSession();

    return ( <>{navLink.map(link =>{
        const isActive = pathname===link.href

        return (<Link 
        href={link.href}
        key={link.label}
        className={isActive ? "active" : ""}>
        
        {link.label}
        
        </Link>)

        
    })}
        {session?.data && (<Link href="/profile">Profile</Link>)}
        {session?.data ? <Link href="#"  onClick={()=>signOut({callbackUrl: "/"})}>Sign Out</Link>: <Link href="/api/auth/signin">SingIn</Link>}
           
    
    </> );
}
 
export { Navigation};