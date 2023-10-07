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
    return ( <div>

    </div> );
}
 
export { Navigation};