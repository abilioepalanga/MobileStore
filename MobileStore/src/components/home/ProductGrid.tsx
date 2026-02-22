interface ProductGridProps {
    // Define any props if needed
    title: string;
    products: any[]; // Replace 'any' with the actual type of your products
}

export const ProductGrid = (props: ProductGridProps) => {
    return (
        <div className="my-32">
            <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl ">
                {props.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {props.products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow-md"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold mt-2">
                            {product.name}
                        </h3>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
