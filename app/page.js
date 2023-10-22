"use client";

import { useEffect, useRef, useState } from "react";
import sequences from "./constants/sequences";

export default function Home() {
  const [storedSequences, setStoredSequences] = useState(() => {
    const localSequences = localStorage.getItem("sequences");
    return localSequences ? JSON.parse(localSequences) : sequences;
  });
  const [sequence, setSequence] = useState({});
  const [serial, setSerial] = useState("");
  const serialRef = useRef();
  const [tries, setTries] = useState(0);
  const [mistakes, setMistakes] = useState("");
  const [completed, setCompleted] = useState(false);

  const getSequence = () => {
    const uncheckedSerials = storedSequences.filter(
      (sequence) => !sequence.checked
    );
    console.log("uncheckedSerials", uncheckedSerials);
    if (uncheckedSerials.length > 0) {
      const randomIndex = Math.floor(Math.random() * uncheckedSerials.length);
      const randomSequence = uncheckedSerials[randomIndex];
      setSequence(randomSequence);
    } else {
      setCompleted(true);
    }
  };

  const handleNewSeries = () => {
    getSequence();
    setSerial("");
    serialRef.current.focus();
    setTries(0);
    setMistakes("");
  };

  const handleSolve = () => {
    if (serial === "") {
      alert("¿Te has quedado en blanco?");
      serialRef.current.focus();
      return;
    }

    if (sequence.solution !== serial) {
      // Tries & Mistakes
      if (tries <= 5) {
        setTries((prevNumber) => prevNumber + 1);
        setMistakes((prevMistake) =>
          prevMistake
            ? prevMistake + ", " + serial.toString()
            : serial.toString()
        );
        setSerial("");
        serialRef.current.focus();
      } else {
        alert("Te has quedado sin intentos. Mejor prueba con otra serie...");
        handleNewSeries();
      }
    }

    // If correct, save in localStorage the checked value
    saveSequence();

    // Show another sequence
    alert("Ou yeah! ¿Probamos con otra?");
    handleNewSeries();
  };

  const saveSequence = () => {
    const index = storedSequences.findIndex(
      (storedSequence) => storedSequence.id === sequence.id
    );

    const updatedSequences = [...storedSequences];
    updatedSequences[index].checked = true;

    setStoredSequences(updatedSequences);
  };

  useEffect(() => {
    getSequence();
  }, []);

  useEffect(() => {
    localStorage.setItem("sequences", JSON.stringify(storedSequences));
  }, [storedSequences]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#762BC6] to-[#C751E6] p-8">
      <section className="flex flex-col items-center justify-center bg-[#0A0B1B] rounded-xl w-full md:w-auto p-8">
        <h1 className="bg-gradient-to-r from-[#762BC6] to-[#C751E6] inline-block text-transparent bg-clip-text text-2xl font-bold">
          SerialQuizz
        </h1>
        {!completed ? (
          <>
            <div className="my-8 py-6 md:px-32 bg-[#4A5567] w-full rounded-lg">
              <div className="text-[#96A2B7] text-center text-3xl md:text-5xl tracking-wider">
                <span>{sequence.content}</span>
              </div>
            </div>
            <div className="flex items-center justify-evenly flex-col md:flex-row text-[#4A5567] w-full">
              <div>
                <span>Intentos: </span>
                <span className="text-[#96A2B7]">{tries}/5</span>
              </div>
              <div>
                <span>Errores: </span>
                <span className="text-[#96A2B7]">{mistakes}</span>
              </div>
            </div>
            <div className="flex items-center justify-center my-8 md:my-12">
              <input
                type="text"
                maxLength={1}
                required
                ref={serialRef}
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                className="w-24 p-4 text-center bg-transparent border-[#4A5567] border-4 outline-none text-white text-5xl rounded-lg lowercase focus:border-[#C950E7]"
              />
            </div>
            <div className="flex items-center justify-around flex-col-reverse gap-y-4 w-full md:flex-row">
              <button
                onClick={handleNewSeries}
                className="bg-[#C950E7] text-white px-8 py-2 rounded-lg text-lg border-b-[#7B258A] border-b-4 transition ease-in-out hover:bg-[#de5dff] duration-300 active:bg-[#ebb3f9]"
              >
                Nueva serie
              </button>
              <button
                onClick={handleSolve}
                className="bg-[#C950E7] text-white px-8 py-2 rounded-lg text-lg border-b-[#7B258A] border-b-4 transition ease-in-out hover:bg-[#de5dff] duration-300 active:bg-[#ebb3f9]"
              >
                Resolver
              </button>
            </div>
          </>
        ) : (
          <h1 className="flex items-center justify-center flex-col mt-8 text-xl text-white">
            <span className="block text-4xl">🎉</span>
            <span>¡Todas las series se han resuelto!</span>
          </h1>
        )}
      </section>
    </main>
  );
}
