import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-80 w-full gap-5">
        <h1 className="font-bold text-4xl">Take notes without distraction</h1>
        <p className="text-gray-700">The best place to find your next minimalist notebook to skyrocket your productivity 🚀</p>
        <Link href="/products">
          <div className="flex flex-row justify-center items-center bg-primary rounded-md p-1">
            <Button className="p-2">Grab yours now</Button>
            <ExternalLink className="text-white p-1" />
          </div>
        </Link>
      </div>
    </>
  );
}
