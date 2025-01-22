import getProducts from "@/Utils/getProducts"
import ProductCard from "./productCard";

export default async function ProductList() {
    const products = await getProducts()

    return (
        <div className="flex flex-wrap gap-10 justify-center items-center">
            {
                products.map((item) => <ProductCard key={item.id} product={item} />)
            }
        </div>
    )
}