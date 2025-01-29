import { addToCart } from "../../../firebase";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default async function addToCartFunction(product) {
    let status = await addToCart(product);
    return (
        <>
            <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    Added item to cart
                </AlertDescription>
            </Alert>
        </>)
}
