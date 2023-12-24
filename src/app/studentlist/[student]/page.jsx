"use client"
import { useRouter, usePathname } from "next/navigation";
export default function Student({ params }) {
    const router = useRouter();
    console.log(params)
    return (
        <div>
            <h1>Student Details</h1>
            <h3>Name : {params.student}</h3>
            <button onClick={() => router.push("/studentlist")}>Back</button>
        </div>
    )
}