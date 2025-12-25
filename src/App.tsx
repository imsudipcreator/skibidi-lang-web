import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import background from "./assets/background.png";
import { BombardinoCrocodillo, ChimpanziniBananini, TralaleroTralala } from "./assets/brainrot-characters";
import { Github } from "./assets/icons";
import SmashButton from "./components/SmashButton";
import { description } from "./data/description-data";


function App() {
  const [count, setCount] = useState(0);

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
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-bowlby-one md:text-8xl text-4xl">
          Skibidi lang
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 20 }}
          className="md:text-2xl text-lg not-md:w-[80%] text-center">
          The Ohio-approved programming language
        </motion.p>
        <div className="mt-20">
          <SmashButton setCount={setCount}>
            {count > 0 ? "Smashed!!!" : "Smash Early"}
          </SmashButton>
        </div>
        <AnimatePresence>
          {
            count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="font-bowlby-one absolute right-12 top-12 text-5xl">
                x{count}
              </motion.span>
            )
          }
        </AnimatePresence>
        {/** Brainrot characters floating */}
        <motion.img
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3} // bounce effect
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing", scale: 1.1 }}
          src={BombardinoCrocodillo}
          alt="Bombardiro Crocodilo"
          className="md:w-67 w-50 h-auto absolute top-12 left-12 cursor-grab"
        />
        <motion.img
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3} // bounce effect
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          whileTap={{ scale: 1.1, cursor: "grabbing" }}
          src={ChimpanziniBananini}
          alt="Chimpanzini Bananini"
          className="w-43 h-auto z-2 absolute md:bottom-28 -bottom-5 right-18 cursor-grab"
        />
        <motion.img
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3} // bounce effect
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
          src={TralaleroTralala}
          alt="Tralalero Tralala"
          className="not-md:hidden w-46 aspect-square absolute bottom-10 left-18 cursor-grab"
        />
      </section>
      <section className="w-full md:-mt-52 -mt-36 overflow-hidden py-24 ">
        {
          description.map((item) => {
            const text = item.description;
            return (
              <div key={item.id} className={item.className + " -skew-y-7 flex items-center justify-center"}>
                <div className="skew-y-7 w-[60%] flex not-md:flex-col gap-7 items-center justify-between md:py-32 py-20">
                  <div className="md:w-96 space-y-2">
                    <h1 className="font-bowlby-one md:text-3xl text-xl leading-6">{item.title}</h1>
                    <p>
                      {text.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 4, rotateZ: 4 }}
                          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="inline-block mr-1"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </p>
                  </div>
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={item.img}
                    alt={item.img.toString()}
                    className="w-auto h-65 z-2" />
                </div>
              </div>
            )
          })
        }
      </section>
      <footer className="w-full bg-[#1d1d1f] md:min-h-54 md:-mt-54 min-h-32 -mt-32 relative flex not-md:flex-col not-md:justify-center items-center justify-between gap-4 md:px-14 text-white">
        <p className="text-white font-bowlby-one font-normal">Made with 🗿 by <a href="https://imsudip.is-a.dev/" target="_blank" className="text-blue-500 hover:underline">Sudip Mahata</a></p>
        <div className="flex items-center gap-2 justify-center">
          <img src={Github} alt="Github" className="aspect-square h-5" />
          <a className="font-bowlby-one text-blue-500 hover:underline" href="https://github.com/imsudipcreator/skibidi-lang" target="_blank">Project Repo</a>
        </div>
      </footer>
    </main>
  )
}

export default App
