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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { titulo, descripcion, precio, tamanio, tipoDeHoja } = product;
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
                <Button>
                    <ShoppingCart />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard;

