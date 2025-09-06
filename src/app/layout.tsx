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

function Header() {
    return (
        <div className="w-full pt-4 text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 drop-shadow-lg">
                ft_transcendence Module Selector
            </h1>
        </div>
    );
}

function Footer() {
    return (
        <footer
            className="fixed bottom-0 w-full p-4 text-center shadow-lg"
            style={{
                background: "linear-gradient(180deg, rgba(24,16,48,0) 0%, rgba(88,28,135,1) 100%",
                transition: "background 0.5s ease",
            }}
        >
            <span className="text-sm text-gray-200">
                &copy; {new Date().getFullYear()} ft_transcendence Module Selector | Design by{" "}
                <a href="https://github.com/BEQSONA-cmd" className="text-pink-300 hover:text-purple-500 underline">
                    BEQSONA-cmd
                </a>
            </span>
        </footer>
    );
}

export default function App({ children }: AppProps) {
    return (
        <html lang={"en"}>
            <body className="h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 text-white ">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main>{children}</main>

                {/* Footer */}
                <Footer />

                {/* Toast Notifications */}
                <ToastContainer />
            </body>
        </html>
    );
}
