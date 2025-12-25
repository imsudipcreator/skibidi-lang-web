import type React from "react";
import {
  BallerinaCappuccina,
  BombombiniGusini,
  TungSahur,
} from "../assets/brainrot-characters";

type Description = {
  id: number;
  title: string;
  description: string;
  img: string;
  className: React.HTMLAttributes<HTMLDivElement>["className"];
};
export const description: Description[] = [
  {
    id: 1,
    title: "Why this slaps?",
    description:
      "Skibidi-Lang exists because not every programming language needs to be serious. It’s an experimental, meme-first language built on LLVM, made for learning how compilers work, trying weird ideas, and having fun while doing it. It’s still cooking, shaped by community votes, and designed to prioritize vibes over verbosity.",
    img: TungSahur,
    className: "bg-[#CD7E7E]",
  },
  {
    id: 2,
    title: "Status Check",
    description:
      "Skibidi-Lang is still cooking. The syntax is evolving, the compiler is under active development, and things may break. That’s intentional. This project is about learning, experimenting, and building in public.",
    img: BallerinaCappuccina,
    className: "bg-[#7CC388]",
  },
  {
    id: 3,
    title: "Wanna contribute some aura?",
    description:
      "Skibidi-Lang is open-source and built in public. If you’re into compilers, language design, or just want to experiment and learn, you’re welcome here. Code contributions, ideas, feedback, and even memes help shape where this project goes. If it interests you, pull up and build with us.",
    img: BombombiniGusini,
    className: "bg-[#E5E563] pb-12",
  },
];
