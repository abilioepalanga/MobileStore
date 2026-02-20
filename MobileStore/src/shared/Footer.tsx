import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants/links";

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

                <div className="border border-gray-800 flex items-center gap-2 py-2 roundend-full">
                    <input
                        type="email"
                        placeholder="Correio Electrónico"
                        className="pl-2 bg-gray-950 w-full focus:outline-none"
                    />
                    <button className="text-slate-200">
                        <BiChevronRight size={20} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Políticas
                </p>
                <nav className="flex flex-col gap-2 text-xs font-medium">
                    <Link
                        to="/privacy-policy"
                        className="text-xs text-slate-300 hover:text-white font-medium"
                    >
                        Política de Privacidade
                    </Link>
                    <Link
                        to="/terms-of-service"
                        className="text-xs text-slate-300 hover:text-white font-medium"
                    >
                        Termos de Serviço
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Siga-nos
                </p>
                <p className="text-xs leading-6">
                    Siga-nos nas redes sociais para ficar por dentro das últimas
                    novidades e promoções!
                </p>
                <div className="flex gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
