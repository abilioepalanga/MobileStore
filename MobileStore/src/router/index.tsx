import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Navbar } from "../shared/Navbar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,

        children: [
            {
                path: "",
                element: <div>Inicio</div>,
            },
            {
                path: "celulares",
                element: <div>Celulares</div>,
            },
            {
                path: "sobre",
                element: <div>Sobre Nos</div>,
            },
        ],
    },
]);
