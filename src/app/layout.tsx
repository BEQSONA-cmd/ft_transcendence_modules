import { Footer, Header } from "@/components/stats/Layout";
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
            <body>
                <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 text-white overflow-x-hidden">
                    {/* Header */}
                    <Header />

                    {/* Main Content */}
                    <main>{children}</main>

                    {/* Footer */}
                    <Footer />

                    {/* Toast Notifications */}
                    <ToastContainer />
                </div>
            </body>
        </html>
    );
}
