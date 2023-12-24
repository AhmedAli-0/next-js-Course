"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function StudentList() {
    const router = useRouter();
    return (
        <div>
            <h1>Student List</h1>
            <button onClick={() => router.push("/")} >Go to Home Page</button>

            <ul>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/ahmed" >Ahmed</Link>
                    </button>
                </li>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/ali" >Ali</Link>
                    </button>
                </li>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/basit" >Basit</Link>
                    </button>
                </li>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/zeeshan" >Zeeshan</Link>
                    </button>
                </li>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/sairm" >Sairm</Link>
                    </button>
                </li>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/asjad" >Asjad</Link>
                    </button>
                </li>
                <li className="inline">
                    <button>
                        <Link href="/studentlist/sohaib" >Sohaib</Link>
                    </button>
                </li>
            </ul>
        </div>
    )
}