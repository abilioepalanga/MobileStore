export const Newsletter = () => {
    return (
        <div className="relative bg-gray7 text-white py-70">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
                style={{
                    backgroundImage: "url(/img/background-newsletter.webp)",
                }}
            />
            <div className="container z-10 relative p-5 md:p-0">
                <div className="w-full text-black bg-white p-12 space-y-5 md:w-[50%] lg:w-[40%] ">
                    <p className="text-xs uppercase font-semibold">
                        Subscreva ao nosso boletim informativo para receber as
                        últimas atualizações e ofertas exclusivas diretamente na
                        sua caixa de entrada.
                    </p>
                    <p className="text-xs font-medium w-[80%] leading-5">
                        Introduza seu endereço de e-mail para receber as últimas
                        novidades, ofertas exclusivas e dicas úteis sobre os
                        melhores celulares de 2025. Fique por dentro das
                        tendências e aproveite as promoções especiais que
                        preparamos para você!
                    </p>
                    <form className="flex flex-col gap-5 xl:flex-row">
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-full px-4 py-3 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="bg-gray-900 cursor-pointer hover:bg-gray-950 text-white rounded-4xl font-semibold py-3 px-8 transition duration-300 ease-in-out"
                        >
                            Subscrever
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
