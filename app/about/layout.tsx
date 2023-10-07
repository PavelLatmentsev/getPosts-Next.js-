import Link from "next/link";

const AboutLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
        <>
            <h2>About us layout up-part</h2>
            <ul>
                <li><Link href="/about/contacts">Contacts</Link></li>
                <li><Link href="/about/team">Team</Link></li>
            </ul>
            {children}
           < h2>About us layout part-down</h2>
        </>
     );
}
 
export default AboutLayout;