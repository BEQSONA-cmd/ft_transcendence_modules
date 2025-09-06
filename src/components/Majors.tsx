import { Module } from "@/data/modules";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface MajorsProps {
    majors: Module[];
    majorCount: number;
    selected: string[];
    toggleModule: (name: string) => void;
}

export default function Majors({ majors, majorCount, selected, toggleModule }: MajorsProps) {
    return (
        <div>
            <h2 className="text-xl text-center font-bold mb-2 text-purple-300">Major Modules</h2>
            <div className="grid gap-2">
                {majors.map((mod) => {
                    const isSelected = selected.includes(mod.name);
                    return (
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            key={mod.name}
                            onClick={() => toggleModule(mod.name)}
                            className={`p-2 rounded-lg text-sm font-medium text-left transition-all shadow-md backdrop-blur-md border 
                                        bg-purple-800/40 border-purple-500/40
                                        ${isSelected ? "ring-2 ring-blue-400" : "opacity-80 hover:opacity-100"}`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-base flex items-center gap-2">
                                    <FaStar className="text-blue-400" />
                                    {mod.name}
                                </span>
                                {majorCount < 7 ? (
                                    <span className="text-xs text-purple-200 font-semibold">{mod.point} pts</span>
                                ) : (
                                    <span className="text-xs text-purple-200 font-semibold">
                                        {mod.percent.toFixed(2)} %
                                    </span>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
