"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const apple = () => {
    alert("Jani");
  }
  const apple1 = (item) => {
    alert(item);
  }

  // Move Function
  const move = (way) => {
    router.push(way)
  }

  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Ahmed Work</h1>
        <div className="row">
          <div className="col">
            <button onClick={() => alert("mari Jan")}>Click Me</button>
            <button onClick={apple}>Click Me</button>
            <button onClick={() => apple1("mari Jan1")}>Click Me</button>
          </div>
          <div className="col">
            About Page:
            <button onClick={() => move("/about")}>About</button>
          </div>
          <div className="col">
            Login Page:
            <button onClick={() => move("/login")}>Login</button>
          </div>
          <div className="col">
            Student List Page:
            <button onClick={() => move("/studentlist")}>Student List</button>
          </div>
          <div className="col">
            Study Lecture Page:
            <button onClick={() => move("/study")}>Study</button>
          </div>
        </div>
        <User name='Ahmed' />
        <User name='Ali' />
        <User name='Hero' />
      </main>
    </>
  )
}

const User = (props) => {
  return (
    <h1>My Name is {props.name}</h1>
  )
}