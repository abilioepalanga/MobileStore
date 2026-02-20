import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer
            className="py-16 bg-gray-950 px-12 flex justify-between gap-10
         text-slate-200 text-sm flex-wrap mt-10 md:flex-nowrap"
        >
            <Link
                to="/"
                className="text-2xl front-bold tracking-tighter transition-all text-white flex-1"
            >
                Celulares Baratos
            </Link>

            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Subscrever
                </p>
                <p className="text-xs font-medium">
                    Receba promoções exclusivas
                </p>
            </div>
            <div className="border border-gray-800 flex items-center gap-2 py-2 roundend-full">
                <input
                    type="email"
                    placeholder="Correio Electrónico"
                    className="pl-2 bg-gray-950 w-full focus:outline-none"
                />
                <button>
                    <BiChevronRight size={20} />
                </button>
            </div>
        </footer>
    );
};
