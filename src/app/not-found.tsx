import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }} className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p>Sorry, we couldnt find the page youre looking for.</p>
        </div>
    );

}