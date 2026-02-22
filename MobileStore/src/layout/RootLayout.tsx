import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";
import { Banner, Newsletter } from "../components/home";

export const RootLayout = () => {
    const { pathname } = useLocation();
    return (
        <div className="h-screen flex flex-col font-montserrat">
            <Navbar />
            {pathname === "/" && <Banner />}

            <main className="container my-8 flex-1">
                <Outlet />
            </main>

            {pathname === "/" && <Newsletter />}

            <Footer />
        </div>
    );
};
