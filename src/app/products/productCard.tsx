'use client'
interface ProductCardProps {
    product: {
        id: number;
        titulo: string;
        descripcion: string;
        precio: number;
        tamanio: string;
        paginas: number;
        tipoDeHoja: string;
        materialCubierta: string;
        coloresDisponibles: string[];
        extras: string[];
        disponible: boolean;
    };
}

import addToCartFunction from "@/components/ui/AddToCartButton";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { titulo, descripcion, precio, tamanio, tipoDeHoja } = product;
    const [alert, setAlert] = useState(false)
    return (
        <Card className="w-[270px] h-[200px] p-2">
            <CardHeader>
                <CardTitle className="h-[20px]">{titulo}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="h-[50px]">{descripcion}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-row justify-between items-center">
                <p className="font-bold">${precio}</p>
                <Button onClick={() => { setAlert(true), addToCartFunction(product, alert) }}>
                    <ShoppingCart />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard;

