"use client";
import { useRouter } from 'next/navigation';
export default function Study() {
    const router = useRouter();
    const move = () => {
        let Day = Math.ceil(Math.random() * 29);
        let Lecture = Math.ceil(Math.random() * 9);
        // console.log(lecture);
        router.push("/study/" + Day + "/" + Lecture)
    }
    return (
        <div>
            <h1>All Lectures of College</h1>
            <button onClick={() => move()}>Go To Rendom Lecture and Class</button>
            <button onClick={() => router.push("/")} >Go to Home Page</button>
        </div>
    )
}