import { Reset } from "../Reset";
import { Download } from "./Download";

export default function Actions() {
    return (
        <div className="w-64 flex flex-col gap-4 mb-6">
            <h2 className="text-2xl text-center font-bold text-pink-400">Actions</h2>
            {/* Majors Card */}
            <Reset />

            {/* Minors Card */}
            <Download />
        </div>
    );
}
