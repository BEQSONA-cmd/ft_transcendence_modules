"use client";

import Majors from "@/components/stats/Majors";
import Minors from "@/components/stats/Minors";
import Stats from "@/components/Stats";
import { useState } from "react";
import { modules } from "@/data/modules";
import { useLocalStorage } from "@/shared/useLocalStorage";
import Actions from "@/components/actions/Actions";

function countMajors(selected: number[]) {
    let majorCount = 0;
    const majorModules = modules.filter((m) => m.type === "Major");
    const minorModules = modules.filter((m) => m.type === "Minor");

    // Count selected major modules as 1
    majorCount += majorModules.filter((m) => selected.includes(m.id)).length;
    // Count each selected minor module as 0.5
    majorCount += minorModules.filter((m) => selected.includes(m.id)).length * 0.5;
    return majorCount;
}

export default function Home() {
    const [selected, setSelected] = useLocalStorage("selectedModules", []);

    const toggleModule = (id: number) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((modId: number) => modId !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    let totalPoints = modules.filter((m) => selected.includes(m.id)).reduce((sum, m) => sum + m.percent, 0);

    const majorCount = countMajors(selected);

    const minorCount = modules.filter((m) => selected.includes(m.id) && m.type === "Minor").length;

    const majors = modules.filter((m) => m.type === "Major");
    const minors = modules.filter((m) => m.type === "Minor");

    if (majorCount < 7) {
        totalPoints = 0;
    } else {
        totalPoints += 30;
    }

    return (
        <div className="flex flex-col p-6 gap-6 md:flex-row flex-1 gap-6 max-w-6xl mx-auto">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Majors */}
                <Majors majors={majors} majorCount={majorCount} selected={selected} toggleModule={toggleModule} />

                {/* Minors */}
                <Minors minors={minors} majorCount={majorCount} selected={selected} toggleModule={toggleModule} />
            </div>

            {/* Stats */}
            <div>
                <Stats totalPoints={totalPoints} majorCount={majorCount} minorCount={minorCount} />

                <Actions />
            </div>
        </div>
    );
}
