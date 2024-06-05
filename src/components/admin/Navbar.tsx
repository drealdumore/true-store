import Link from "next/link";
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import menus from "@/interfaces/navInterface";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <>
      <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 backdrop-blur-xs">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-sm font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                  className={"text-sm font-bold h-6 w-6"}
                >
                  <path
                    d="M14.9714 7.5C14.9714 7.5 15.4714 7.5 15.9714 8.5C15.9714 8.5 17.5596 6 18.9714 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9955 15.042L19.0242 19.5927C18.9749 20.9362 17.868 22 16.5193 22H5.3929C4.00856 22 2.88633 20.8814 2.88633 19.5014L2.97249 13.0355M8.9811 6.0129L5.14769 5.94884C4.25805 5.92732 3.46061 6.49283 3.18927 7.33765L2.09213 10.7538C1.96234 11.1579 1.95337 11.5994 2.16887 11.9654C2.95443 13.2993 5.06355 15.1192 8.41733 13.163M7.44597 11.3322C7.83606 12.6005 9.36537 14.8259 12.4861 13.5372"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.0004 7.01618C22.0004 9.78653 19.7586 12.0324 16.9933 12.0324C14.2279 12.0324 11.9861 9.78653 11.9861 7.01618C11.9861 4.24582 14.2279 2 16.9933 2C19.7586 2 22.0004 4.24582 22.0004 7.01618Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="sr-only">True Store</span>
              </Link>

              {menus.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.href}
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground transition-all text-sm font-medium hover:bg-muted hover:text-primary ${
                    pathName === menu.href ? "text-primary bg-muted" : ""
                  }`}
                >
                  {React.cloneElement(menu.icon, { className: "h-4 w-4" })}
                  {menu.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default Navbar;
