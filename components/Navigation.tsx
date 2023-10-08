"use client"

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
    return ( <>{navLink.map(link =>{
        const isActive = pathname===link.href

        return (<Link 
        href={link.href}
        key={link.label}
        className={isActive ? "active" : ""}>
        
        {link.label}
        
        </Link>)
    })}
           
    </> );
}
 
export { Navigation};