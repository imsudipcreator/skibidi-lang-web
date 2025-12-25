import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import { smash } from "../lib";

interface SmashButtonProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode
}

export default function SmashButton({ setCount, children }: SmashButtonProps) {
    const countRef = useRef(0);
    const timerRef = useRef<number | null>(null);


    function smashBuffer() {
        countRef.current++;
        setCount(countRef.current);

        // clear previous timeout
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }

        // set new timeout
        timerRef.current = window.setTimeout(() => {
            void smash(countRef.current);

            // reset
            countRef.current = 0;
            setCount(0);
            timerRef.current = null;
        }, 2000);
    }

    useEffect(() => {
        return () => {
            if (countRef.current > 0) {
                void smash(countRef.current);
            }
        };
    }, []);

    return (
        <motion.button
            initial={{ scale: 0, backgroundColor: "oklch(76.9% 0.188 70.08)" }}
            animate={{ scale: 1 }}
            viewport={{ once: true }}
            whileTap={{ scale: 1.1, backgroundColor: "oklch(66.6% 0.179 58.318)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20, duration: 0.5 }}
            onClick={smashBuffer}
            className="transition-all select-none duration-75 cursor-pointer font-bowlby-one font-medium px-6 py-3 rounded-full md:text-2xl text-xl border-2 border-amber-600">
            {children}
        </motion.button>
    )
}
