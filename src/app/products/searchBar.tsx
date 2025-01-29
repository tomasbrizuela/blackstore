import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputItem() {
    return (
        <div className="flex flex-col w-full items-start gap-1.5 justify-start">
            <Label htmlFor="notebooks">Search</Label>
            <Input id="notebooks" type="text" className="" />
        </div>
    )
}

export default function SearchBar() {
    return (
        <div className="w-full ps-4 pe-4">
            <InputItem></InputItem>
        </div>
    )
}