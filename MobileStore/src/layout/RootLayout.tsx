import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";

export const RootLayout = () => {
    const { pathname } = useLocation();
    return (
        <div className="h-screen flex flex-col font-montserrat">
            <Navbar />
            {pathname === "/" && (
                <div className="bg-gray-100 py-8">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Bem-vindo à MobileStore!
                    </h1>
                </div>
            )}

            <main className="container my-8 flex-1">
                <Outlet />
            </main>

            {pathname === "/" && (
                <div className="bg-gray-100 py-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">
                        Explore nossa coleção de celulares e encontre o modelo
                        perfeito para você!
                    </h2>
                </div>
            )}

            <Footer />
        </div>
    );
};
