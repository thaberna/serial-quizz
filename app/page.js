export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-tr from-purple-700 to-fuchsia-700 p-80">
      <section className="flex flex-col items-center justify-center bg-[#0A0B1B] rounded-xl w-full p-8">
        <h1 className="bg-gradient-to-r from-purple-700 to-fuchsia-700 inline-block text-transparent bg-clip-text text-2xl font-bold">
          SerialQuizz
        </h1>
        <div className="my-8 bg-[#4A5567] p-10 w-full rounded-lg">
          <div className="text-[#96A2B7] text-center text-5xl leading-6 h-4 tracking-wider">
            <span>l m m j v s</span>
          </div>
        </div>
      </section>
    </main>
  );
}
