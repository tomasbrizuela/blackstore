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
                                        <NavigationMenuLink href="/dark">Dark</NavigationMenuLink>
                                        <NavigationMenuLink href="/ligth" >Ligth</NavigationMenuLink>
                                        <NavigationMenuLink href="/sale">On Sale</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link href="/cart" legacyBehavior passHref>
                            <NavigationMenu className={cn(navigationMenuTriggerStyle())}>
                                Buy
                            </NavigationMenu>
                        </Link>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenu className={navigationMenuTriggerStyle()}>About us
                            </NavigationMenu>
                        </Link>
                    </NavigationMenuItem>
                </div>
            </div >
            {children}
        </>
    );
}