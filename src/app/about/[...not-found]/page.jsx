"use client"
import { useRouter, usePathname } from "next/navigation";

export default function AboutNotFound() {
    const router = useRouter();
    const pathname = usePathname();
    console.log("router.pathname", pathname);
    return (
        <div>
            <h1>{pathname} <br /> Page for Not Found.</h1>
            <button onClick={() => router.push("/about")}>Back</button>
        </div>
    )
}
