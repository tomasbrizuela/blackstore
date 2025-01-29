import { filterItems } from "../../../../firebase.js";
import ProductList from "../../../components/ProductListModule";
export default async function Category({ params }) {
    let { category } = params;
    let products = await filterItems(category)
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
                <h1 className="text-4xl font-bold">Notebooks | {category}</h1>
            </div>
            <div>
                <ProductList getItems={products} />
            </div>
        </div>
    );
}