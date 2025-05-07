import { navLinks } from "../constant"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { MenuIcon } from "lucide-react"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-2 py-4 border-b border-gray-500">
      <div className="flex justify-between  gap-4">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger><MenuIcon/></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>

                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div>LOGO</div>

        <div className="flex gap-3">
          {
            navLinks.map((link, index) => (

              <Link key={index} href={link.href} className="text-sm">{link.label}</Link>
            ))
          }
        </div>
      </div>
      <div>
        {/* <Search /> */}
        <div className="flex gap-2">
          <button className="bg-black/80 text-white px-4 py-2 rounded-lg cursor-pointer">Signup</button>
          <button>Login</button>

        </div>
      </div>
    </header>
  )
}

export default Navbar
