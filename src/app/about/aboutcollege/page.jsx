"use client"
import { useRouter } from "next/navigation";
export default function AboutCollege() {
    const router = useRouter();
    return (
        <div>
            <h1>About Page for College</h1>
            <button onClick={() => router.push("/about")}>Back</button>
        </div>
    )
}
