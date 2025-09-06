"use client";

import Majors from "@/components/Majors";
import Minors from "@/components/Minors";
import Stats from "@/components/Stats";
import { useState } from "react";
import { modules } from "@/data/modules";

export default function Home() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleModule = (name: string) => {
        setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
    };

    const totalPoints = modules.filter((m) => selected.includes(m.name)).reduce((sum, m) => sum + m.points, 0);

    const majorCount = modules.filter((m) => selected.includes(m.name) && m.type === "Major").length;

    const minorCount = modules.filter((m) => selected.includes(m.name) && m.type === "Minor").length;

    const majors = modules.filter((m) => m.type === "Major");
    const minors = modules.filter((m) => m.type === "Minor");

    return (
        <div className="w-full flex flex-col p-6 gap-6 md:flex-row flex-1 gap-6">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Majors */}
                <Majors majors={majors} selected={selected} toggleModule={toggleModule} />

                {/* Minors */}
                <Minors minors={minors} selected={selected} toggleModule={toggleModule} />
            </div>

            {/* Stats */}
            <Stats totalPoints={totalPoints} majorCount={majorCount} minorCount={minorCount} />
        </div>
    );
}
