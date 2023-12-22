"use client"
import { useRouter, usePathname } from "next/navigation";
export default function AboutStudent() {
    const router = useRouter();
    return (
        <div>
            <h1>About Page for Student</h1>
            <button onClick={() => router.push("/about")}>Back</button>
        </div>
    )
}
