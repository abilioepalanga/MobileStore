import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";

export const HomePage = () => {
    return (
        <div>
            <FeatureGrid />
            <ProductGrid
                title="Celulares em Destaque"
                products={[
                    {
                        id: 1,
                        name: "iPhone 15 Pro Max",
                        description:
                            "O mais avançado iPhone de todos os tempos.",
                        image: "/img/iphone15promax.jpg",
                    },
                    {
                        id: 2,
                        name: "Samsung Galaxy S25 Ultra",
                        description:
                            "O melhor da Samsung com tecnologia de ponta.",
                        image: "/img/galaxys25ultra.jpg",
                    },
                    {
                        id: 3,
                        name: "Xiaomi 14 Ultra",
                        description: "O smartphone mais avançado da Xiaomi.",
                        image: "/img/xiaomi14ultra.jpg",
                    },
                ]}
            />
        </div>
    );
};
