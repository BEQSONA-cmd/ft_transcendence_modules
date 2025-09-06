import { Module } from "@/data/modules";
import { motion } from "framer-motion";
import { FaStarHalfAlt } from "react-icons/fa";

interface MinorsProps {
    minors: Module[];
    selected: string[];
    toggleModule: (name: string) => void;
}

export default function Minors({ minors, selected, toggleModule }: MinorsProps) {
    return (
        <div>
            <h2 className="text-xl text-center font-bold mb-2 text-pink-300">Minor Modules</h2>
            <div className="grid gap-2">
                {minors.map((mod) => {
                    const isSelected = selected.includes(mod.name);
                    return (
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            key={mod.name}
                            onClick={() => toggleModule(mod.name)}
                            className={`p-2 rounded-lg text-sm font-medium text-left transition-all shadow-md backdrop-blur-md border 
                    bg-pink-800/40 border-pink-500/40
                    ${isSelected ? "ring-2 ring-red-400" : "opacity-80 hover:opacity-100"}`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-base flex items-center gap-2">
                                    <FaStarHalfAlt className="text-cyan-400" />
                                    {mod.name}
                                </span>
                                <span className="text-xs text-purple-200 font-semibold">{mod.points} pts</span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
