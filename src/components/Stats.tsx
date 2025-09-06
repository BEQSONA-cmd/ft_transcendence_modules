import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface TotalPointsProps {
    totalPoints: number;
    majorCount: number;
}

function TotalPoints({ totalPoints, majorCount }: TotalPointsProps) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-purple-900/40 backdrop-blur-md shadow-lg border border-purple-500/40">
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-purple-200 flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    Total Points
                </span>
                <span
                    className={`text-2xl font-extrabold ${
                        totalPoints < 100 || majorCount < 7 ? "text-red-400" : "text-green-400"
                    }`}
                >
                    {totalPoints}
                </span>
            </div>
            <div className="w-full h-2 rounded-full bg-purple-800/30">
                <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                        totalPoints < 100 || majorCount < 7 ? "bg-red-400" : "bg-green-400"
                    }`}
                    style={{ width: `${Math.min(totalPoints, 100)}%` }}
                ></div>
            </div>
        </div>
    );
}

interface MajorsProps {
    majorCount: number;
}

function Majors({ majorCount }: MajorsProps) {
    const progress = Math.min((majorCount / 16) * 100, 100);
    const dotPosition = Math.min((7 / 16) * 100, 100);

    return (
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-blue-900/40 backdrop-blur-md shadow-lg border border-blue-500/40">
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-200 flex items-center gap-2">
                    <FaStar className="text-cyan-400" />
                    Majors
                </span>
                <span className={`text-2xl font-extrabold ${majorCount >= 7 ? "text-green-400" : "text-red-400"}`}>
                    {majorCount} / 16
                </span>
            </div>
            <div className="w-full h-2 rounded-full bg-blue-800/30 relative">
                {/* Progress bar */}
                <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                        majorCount >= 7 ? "bg-green-400" : "bg-red-400"
                    }`}
                    style={{ width: `${progress}%` }}
                ></div>
                {/* Dot at 7 majors */}
                {majorCount < 7 && (
                    <div
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{
                            left: `calc(${dotPosition}% - 4px)`, // Adjust for dot size
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "white",
                            border: "2px solid #22c55e", // cyan-400
                            boxShadow: "0 0 4px #22c55e",
                            zIndex: 1,
                        }}
                    />
                )}
            </div>
        </div>
    );
}

interface MinorsProps {
    minorCount: number;
}

function Minors({ minorCount }: MinorsProps) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-2xl bg-pink-900/40 backdrop-blur-md shadow-lg border border-pink-500/40">
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-pink-200 flex items-center gap-2">
                    <FaStarHalfAlt className="text-cyan-400" />
                    Minors
                </span>
                <span className="text-2xl font-extrabold text-pink-400">{minorCount}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-pink-800/30">
                <div
                    className="h-2 rounded-full bg-pink-400 transition-all duration-500"
                    style={{ width: `${Math.min((minorCount / 11) * 100, 100)}%` }}
                ></div>
            </div>
        </div>
    );
}

interface StatsProps {
    totalPoints: number;
    majorCount: number;
    minorCount: number;
}

export default function Stats({ totalPoints, majorCount, minorCount }: StatsProps) {
    return (
        <div className="w-64 flex flex-col gap-4">
            <h2 className="text-2xl text-center font-bold mb-2 text-pink-400">Stats</h2>

            {/* Total Points Card */}
            <TotalPoints totalPoints={totalPoints} majorCount={majorCount} />

            {/* Majors Card */}
            <Majors majorCount={majorCount} />

            {/* Minors Card */}
            <Minors minorCount={minorCount} />
        </div>
    );
}
