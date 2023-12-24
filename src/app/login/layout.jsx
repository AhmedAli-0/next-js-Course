"use client"
import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div className="m-10 w-screen">
            {
                pathName !== "/login/logincollege" ?
                    <ul className="login-menu justify-evenly">
                        <li>
                            <h4>Login Navbar</h4>
                        </li>
                        <li>
                            <Link href="/login">Login Main</Link>
                        </li>
                        <li>
                            <Link href="/login/loginstudent">Student Login </Link>
                        </li>
                        <li>
                            <Link href="/login/logincollege">College Login </Link>
                        </li>
                    </ul>
                    : <Link href="/login" >Go to Main Login Page</Link>
            }
            {children}
        </div>
    )
}