import { useLocalStorage } from "@/shared/useLocalStorage";
import { toast } from "react-toastify";

export function Reset() {
    const [selected, setSelected] = useLocalStorage("selectedModules", []);

    const handleReset = () => {
        setSelected([]);
        toast.success("Selection reset!");
    };

    return (
        <div
            className="p-4 rounded-2xl bg-blue-900/40 backdrop-blur-md shadow-lg border border-blue-500/40 text-center cursor-pointer hover:bg-blue-900/60 transition"
            onClick={handleReset}
        >
            <span className="text-xl font-semibold text-pink-200">Reset</span>
        </div>
    );
}
