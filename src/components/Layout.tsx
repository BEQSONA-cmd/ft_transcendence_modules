export function Header() {
    return (
        <div className="w-full pt-4 text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 drop-shadow-lg">
                ft_transcendence Module Selector
            </h1>
        </div>
    );
}

export function Footer() {
    return (
        <div
            className="fixed bottom-0 w-full p-4 text-center shadow-lg"
            style={{
                background: "linear-gradient(180deg, rgba(24,16,48,0) 0%, rgba(15, 10, 32, 0.8) 100%)",
                transition: "background 0.5s ease",
            }}
        >
            <footer>
                <span className="text-sm text-gray-200">
                    &copy; {new Date().getFullYear()}
                    <span className="text-pink-400"> ft_transcendence </span> Module Selector | Design by{" "}
                    <a
                        href="https://github.com/BEQSONA-cmd"
                        className="text-pink-300 hover:text-purple-500 underline"
                        target="_blank"
                    >
                        BEQSONA-cmd
                    </a>
                </span>
            </footer>
        </div>
    );
}
