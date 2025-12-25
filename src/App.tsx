import background from "./assets/background.png";
import { BallerinaCappuccina, BombardiroCrocodilo, ChimpanziniBananini, TralaleroTralala, TungSahur } from "./assets/brainrot-characters";


const description = [
  {
    id: 1,
    title: "Why this slaps?",
    description: "Skibidi-Lang exists because not every programming language needs to be serious. It’s an experimental, meme-first language built on LLVM, made for learning how compilers work, trying weird ideas, and having fun while doing it. It’s still cooking, shaped by community votes, and designed to prioritize vibes over verbosity.",
    img: TungSahur,
    className: "bg-[#CD7E7E]"
  },
  {
    id: 2,
    title: "Status Check",
    description: "Skibidi-Lang is still cooking. The syntax is evolving, the compiler is under active development, and things may break. That’s intentional. This project is about learning, experimenting, and building in public.",
    img: BallerinaCappuccina,
    className: "bg-[#7CC388]"
  }
]

function App() {

  return (
    <main className="w-full min-h-svh overflow-x-hidden flex flex-col items-center">
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="relative w-full h-svh flex flex-col items-center justify-center"
      >
        <h1 className="font-bowlby-one md:text-8xl text-4xl">Skibidi lang</h1>
        <p className="md:text-2xl text-lg not-md:w-[80%] text-center">The Ohio-approved programming language</p>
        <div className="mt-20">
          <button className="active:bg-amber-600 active:px-8 active:py-4 transition-all duration-75 cursor-pointer font-bowlby-one font-medium px-6 py-3 rounded-full bg-amber-500 text-2xl">Smash Early</button>
        </div>

        {/** Brainrot characters floating */}
        <img src={BombardiroCrocodilo} alt="Bombardiro Crocodilo" className="w-38 h-auto absolute top-12 left-12" />
        <img src={ChimpanziniBananini} alt="Chimpanzini Bananini" className="w-43 h-auto z-2 absolute md:bottom-28 bottom-8 right-18 pointer-events-none" />
        <img src={TralaleroTralala} alt="Tralalero Tralala" className="not-md:hidden w-32 aspect-square absolute bottom-10 left-18" />
      </section>
      <section className="w-full md:-mt-52 -mt-36 overflow-hidden py-24 bg-amber-700">
        {
          description.map((item) => (
            <div key={item.id} className={item.className + " -skew-y-7 flex items-center justify-center"}>
              <div className="skew-y-7 w-[60%] flex not-md:flex-col gap-7 items-center justify-between md:py-32 py-20">
                <div className="md:w-96">
                  <h1 className="font-bowlby-one md:text-3xl text-xl">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <img src={item.img} alt={item.img.toString()} className="w-auto h-65" />
              </div>
            </div>
          ))
        }
      </section>
      <footer className="w-full bg-[#1d1d1f] md:min-h-54 md:-mt-54 min-h-32 -mt-32 relative flex items-center justify-center">
        <p className="text-white font-bowlby-one font-normal">Made with 🗿 by <a href="https://imsudip.is-a.dev/" target="_blank" className="text-blue-500 hover:underline">Sudip Mahata</a></p>
      </footer>
    </main>
  )
}

export default App
