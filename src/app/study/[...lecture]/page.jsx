"use client"
import { useRouter } from 'next/navigation';
export default function Lecture({params}){
    console.log(params);
    const router = useRouter();
    return(
        <div>
            <h1>Day of college {params.lecture[0]} </h1>
            <h2>Lecture No. {params.lecture[1]} </h2>
            <button onClick={() => router.push("/study")} >Back</button>
        </div>
    )
}