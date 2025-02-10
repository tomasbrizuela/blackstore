import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-80 gap-3'>
            <h1 className="font-bold text-4xl">Welcome to your home page</h1>
            <div className="flex flex-row justify-between item-center gap-4">
                <Link href={"/products"}>
                    <Button>Ver productos</Button>
                </Link>
                <Link href={"/cart"}>
                    <Button>Ir al carrito</Button>
                </Link>
            </div>
        </div>
    )
}