"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";
const Navbar = () => {
const pathname=usePathname();
  return (
    <nav className="bg-blue-300 p-5 ">
        <div className="container mx-auto flex justify-between">
<Link href="/" className="text-white text-xl font-bold" >
Advice App
</Link>
<div className="flex gap-4 mx-5">
<Link href="/" className={` text-white px-3 ${pathname ==="/"? 'underline':'' }`}>Home
</Link>
<Link href="/faviouries" className={` text-white px-3 ${pathname==="/faviouries"?"underline":""}`}>faviouries
</Link>
</div>
        </div>

    </nav>
  )
}

export default Navbar