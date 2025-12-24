import video from "./assets/background.mp4";

function App() {

  return (
    <main className="w-screen h-svh overflow-hidden relative">
      <video className="2xl:h-auto 2xl:w-full h-full w-auto object-cover absolute inset-0" src={video} autoPlay muted loop />
      <section className="absolute inset-0 w-full h-full z-2 flex flex-col items-center justify-center">
        <h1 className="font-bowlby-one text-8xl">Skibidi lang</h1>
        <p className="text-2xl">a ohio approved programming language</p>

        <div className="mt-20">
          <button className="cursor-pointer font-bowlby-one font-medium px-6 py-3 rounded-full bg-amber-500 text-2xl">Smash</button>
        </div>
      </section>
    </main>
  )
}

export default App
