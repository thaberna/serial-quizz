export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#762BC6] to-[#C751E6] p-80">
      <section className="flex flex-col items-center justify-center bg-[#0A0B1B] rounded-xl w-full p-8">
        <h1 className="bg-gradient-to-r from-[#762BC6] to-[#C751E6] inline-block text-transparent bg-clip-text text-2xl font-bold">
          SerialQuizz
        </h1>
        <div className="my-8 p-8 bg-[#4A5567] w-full rounded-lg">
          <div className="text-[#96A2B7] text-center text-5xl leading-6 h-4 tracking-wider">
            <span>l m m j v s</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[#4A5567] w-full px-10">
          <div>
            <span>Intentos: </span>
            <span className="text-[#96A2B7]">4/5</span>
          </div>
          <div>
            <span>Errores: </span>
            <span className="text-[#96A2B7]">a, b, c</span>
          </div>
        </div>
      </section>
    </main>
  );
}
