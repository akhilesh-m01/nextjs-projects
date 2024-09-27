"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState  } from "react";

export default function Home() {
  const [input,setInput] = useState("");
  const {push} = useRouter();

  const changeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    setInput(e.target.value)
  }

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
    push(`/prediction/${input}`)
  }

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={changeHandler} placeholder="Enter Your Name" />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
