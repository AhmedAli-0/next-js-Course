"use client"
import { useRouter } from "next/navigation";
export default function AboutCollege() {
    const router = useRouter();
    return (
        <div>
            <h1>Login Page for Student</h1>
            <button onClick={() => router.push("/login")}>Back</button>
        </div>
    )
}
