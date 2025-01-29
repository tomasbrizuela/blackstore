import ProductCard from "@/app/products/productCard";

export default async function ProductList({ getItems }) {

    return (
        <div className="flex flex-wrap gap-10 justify-center items-center p-10">
            {
                getItems.map((item) => <ProductCard key={item.id} product={item} />)
            }
        </div>
    )
}