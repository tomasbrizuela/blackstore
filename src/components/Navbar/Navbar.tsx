import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface NavbarProps {
    children: ReactNode; // ReactNode permite cualquier tipo de contenido que pueda ser renderizado
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <>
            <div className="flex flex-row justify-between items-center p-3">
                <Link href={"/"}>
                    <h1 className="font-bold text-2xl">Black Store.</h1>
                </Link>

                <div>
                    <NavigationMenuItem className="list-none flex flex-row gap-3">
                        <Link href="/products" legacyBehavior passHref>
                            <NavigationMenu className={navigationMenuTriggerStyle()}>
                                Products
                            </NavigationMenu>
                        </Link>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                    <NavigationMenuContent className="gap-2 p-3 min-w-[110px] text-sm flex flex-col justify-center items-center shadow-none">
                                        <NavigationMenuLink href="/products/Duradero" className="hover:bg-gray-100 px-3 py-1 rounded">Duradero</NavigationMenuLink>
                                        <NavigationMenuLink href="/products/Punteadas" className="hover:bg-gray-100 px-3 py-1 rounded">Punteadas</NavigationMenuLink>
                                        <NavigationMenuLink href="/products/Blanco" className="hover:bg-gray-100 px-3 py-1 rounded">Blanco</NavigationMenuLink>
                                        <NavigationMenuLink href="/products/Elegante" className="hover:bg-gray-100 px-3 py-1 rounded">Elegante</NavigationMenuLink>
                                        <NavigationMenuLink href="/products/Sostenible" className="hover:bg-gray-100 px-3 py-1 rounded">Sostenible</NavigationMenuLink>
                                        <NavigationMenuLink href="/products/Cuadriculadas" className="hover:bg-gray-100 px-3 py-1 rounded">Cuadriculadas</NavigationMenuLink>
                                        <NavigationMenuLink href="/products/Blanco" className="hover:bg-gray-100 px-3 py-1 rounded">Blanco</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link href="/cart" legacyBehavior passHref>
                            <NavigationMenu className={cn(navigationMenuTriggerStyle())}>
                                Cart
                            </NavigationMenu>
                        </Link>
                        <Link href="/login" legacyBehavior passHref>
                            <NavigationMenu className={cn(navigationMenuTriggerStyle(), "bg-black text-white")}>Log in
                            </NavigationMenu>
                        </Link>
                    </NavigationMenuItem>
                </div>
            </div >
            {children}
        </>
    );
}