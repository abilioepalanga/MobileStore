import {
    MdLocalShipping,
    MdVerified,
    MdSupportAgent,
    MdLocalOffer,
} from "react-icons/md";

export const FeatureGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
            <div className="flex flex-col items-center text-center">
                <MdLocalShipping className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
                <p className="text-sm text-gray-600">
                    Receba seu celular em tempo recorde, com opções de entrega
                    expressa para sua conveniência.
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <MdVerified className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                    Garantia de Qualidade
                </h3>
                <p className="text-sm text-gray-600">
                    Todos os nossos celulares passam por rigorosos testes de
                    qualidade para garantir o melhor desempenho e durabilidade.
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <MdSupportAgent className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                    Suporte ao Cliente
                </h3>
                <p className="text-sm text-gray-600">
                    Nossa equipe de suporte está sempre pronta para ajudar com
                    qualquer dúvida ou problema que você possa ter.
                </p>
            </div>

            <div className="flex flex-col items-center text-center">
                <MdLocalOffer className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                    Ofertas Exclusivas
                </h3>
                <p className="text-sm text-gray-600">
                    Aproveite promoções e descontos exclusivos em nossos
                    celulares, disponíveis apenas para nossos clientes.
                </p>
            </div>
        </div>
    );
};
