import "./globals.css";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export const metadata = {
    title: "ft_transcendence",
    description: "ft_transcendence Module Selector",
};

interface AppProps {
    children: ReactNode;
}

export default function App({ children }: AppProps) {
    return (
        <html lang={"en"}>
            <body className="h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 text-white ">
                {/* Header */}
                <h1 className="pt-4 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 drop-shadow-lg">
                    ft_transcendence Module Selector
                </h1>

                {/* Main Content */}
                <main>{children}</main>

                {/* Footer */}
                <footer className="fixed bottom-0 w-full bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 p-4 text-center shadow-lg">
                    <span className="text-sm text-gray-200">
                        &copy; {new Date().getFullYear()} ft_transcendence Module Selector | Design by{" "}
                        <a
                            href="https://github.com/BEQSONA-cmd"
                            className="text-pink-300 hover:text-purple-300 underline"
                        >
                            BEQSONA-cmd
                        </a>
                    </span>
                </footer>
                <ToastContainer />
            </body>
        </html>
    );
}
