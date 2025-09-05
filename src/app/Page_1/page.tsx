"use client";

import { useLocalStorage } from "@/components/shared/useLocalStorage";
import { useEffect, useState } from "react";

export default function Home() {
    const [language] = useLocalStorage("language");
    const headText = language === "en" ? "Page 1 Template" : "გვერდი 1 თემა";
    const buttonText = language === "en" ? "HELLO BUTTON" : "გამარჯობა ღილაკი";
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return null;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <main className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">{headText}</h1>
                <button className="text-lg shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 font-black py-3 px-6 rounded-lg hover:scale-105 duration-300">
                    {buttonText}
                </button>
            </main>
        </div>
    );
}
