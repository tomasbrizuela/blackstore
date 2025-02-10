import ProductList from './productList';
import SearchBar from './searchBar';
export default function ProductsPage() {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mt-4 p-4">
            <h1 className='font-bold text-4xl m-3'>Find your next notebook</h1>
            <ProductList />
        </div>
    )
}