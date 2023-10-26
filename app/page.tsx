"use client";

import axios from "axios";
import Image from "next/image";

export default function Home() {
  const getData = async () => {
    const response = await axios.get("/api");
    console.log(response);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>API Reference</p>
        <button onClick={getData}>getDate</button>
      </div>
    </main>
  );
}
