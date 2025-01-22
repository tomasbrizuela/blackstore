import { productsStore } from '../../products';
export default async function getProducts() {
    const products = await productsStore;
    return products;
}