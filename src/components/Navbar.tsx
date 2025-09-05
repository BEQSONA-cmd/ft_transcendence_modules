"use client";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./shared/useLocalStorage";

export default function Navbar() {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return null;

    const navbarButtonTexts = [
        { text: language === "en" ? "Home" : "მთავარი" },
        { text: language === "en" ? "Page 1" : "გვერდი 1" },
        { text: language === "en" ? "Page 2" : "გვერდი 2" },
        { text: language === "en" ? "Page 3" : "გვერდი 3" },
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center gap-1">
                <ul className="flex gap-1 items-center">
                    <li>
                        <a href="/" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">
                            {navbarButtonTexts[0].text}
                        </a>
                    </li>
                    <li>
                        <a href="Page_1" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">
                            {navbarButtonTexts[1].text}
                        </a>
                    </li>
                    <li>
                        <a href="Page_2" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">
                            {navbarButtonTexts[2].text}
                        </a>
                    </li>
                    <li>
                        <a href="Page_3" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">
                            {navbarButtonTexts[3].text}
                        </a>
                    </li>
                </ul>
                <div className="ml-auto">
                    <button
                        onClick={() => setLanguage(language === "en" ? "ka" : "en")}
                        className="bg-gray-700 text-white p-2 rounded-lg"
                    >
                        {language === "en" ? "English" : "ქართული"}
                    </button>
                </div>
            </div>
        </nav>
    );
}
