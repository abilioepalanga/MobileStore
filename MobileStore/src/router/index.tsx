import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { AboutPage, CellPhonePage, HomePage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,

        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "celulares",
                element: <CellPhonePage />,
            },
            {
                path: "sobre",
                element: <AboutPage />,
            },
        ],
    },
]);
