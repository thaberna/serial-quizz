"use client";

import { useEffect, useState } from "react";
import serials from "./constants/serials";

export default function Home() {
  const [sequence, setSequence] = useState("");

  const getSequence = () => {
    const uncheckedSerials = serials.filter((serial) => !serial.checked);

    if (uncheckedSerials.length > 0) {
      const randomIndex = Math.floor(Math.random() * uncheckedSerials.length);
      const randomSequence = uncheckedSerials[randomIndex];
      console.log(randomSequence);
      setSequence(randomSequence.content);
    } else {
      console.log("Todas las series han sido resueltas");
    }
  };

  useEffect(() => {
    getSequence();
  }, [sequence]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#762BC6] to-[#C751E6] p-8">
      <section className="flex flex-col items-center justify-center bg-[#0A0B1B] rounded-xl w-full md:w-auto p-8">
        <h1 className="bg-gradient-to-r from-[#762BC6] to-[#C751E6] inline-block text-transparent bg-clip-text text-2xl font-bold">
          SerialQuizz
        </h1>
        <div className="my-8 py-6 md:px-32 bg-[#4A5567] w-full rounded-lg">
          <div className="text-[#96A2B7] text-center text-3xl md:text-5xl tracking-wider">
            <span>{sequence}</span>
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-col md:flex-row text-[#4A5567] w-full">
          <div>
            <span>Intentos: </span>
            <span className="text-[#96A2B7]">4/5</span>
          </div>
          <div>
            <span>Errores: </span>
            <span className="text-[#96A2B7]">a, b, c</span>
          </div>
        </div>
        <div className="flex items-center justify-center my-8 md:my-12">
          <input
            type="text"
            autoFocus={true}
            maxLength={1}
            required
            className="w-24 p-4 text-center bg-transparent border-[#4A5567] border-4 outline-none text-white text-5xl rounded-lg lowercase focus:border-[#C950E7]"
          />
        </div>
        <div className="flex items-center justify-around flex-col-reverse gap-y-4 w-full md:flex-row">
          <button className="bg-[#C950E7] text-white px-8 py-2 rounded-lg text-lg border-b-[#7B258A] border-b-4 transition ease-in-out hover:bg-[#de5dff] duration-300 active:bg-[#ebb3f9]">
            Nueva serie
          </button>
          <button className="bg-[#C950E7] text-white px-8 py-2 rounded-lg text-lg border-b-[#7B258A] border-b-4 transition ease-in-out hover:bg-[#de5dff] duration-300 active:bg-[#ebb3f9]">
            Resolver
          </button>
        </div>
      </section>
    </main>
  );
}
