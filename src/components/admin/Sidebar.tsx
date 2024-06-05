import Link from "next/link";
import { Package2, ShoppingCart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import React from "react";
import menus from "@/interfaces/navInterface";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
              className={"text-sm font-bold"}
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
            <span>True Store</span>
          </Link>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menus.map((menu) => (
              <Link
                key={menu.title}
                href={menu.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-sm font-medium hover:bg-muted hover:text-primary ${
                  pathName === menu.href ? "text-primary bg-muted" : ""
                }`}
              >
                {React.cloneElement(menu.icon, { className: "h-4 w-4" })}
                {menu.title}
              </Link>
            ))}

            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import Link from "next/link";
// import {
//   Bell,
//   CircleUser,
//   Home,
//   LineChart,
//   Menu,
//   Package,
//   Package2,
//   Search,
//   ShoppingCart,
//   Users,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// const Sidebar = () => {
//   return (
//     <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">

//       {/* sidebar */}
//       <div className="hidden border-r bg-muted/40 md:block">
//         <div className="flex h-full max-h-screen flex-col gap-2">
//           <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
//             <Link href="/" className="flex items-center gap-2 font-semibold">
//               <Package2 className="h-6 w-6" />
//               <span className="">Acme Inc</span>
//             </Link>

//             <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
//               <Bell className="h-4 w-4" />
//               <span className="sr-only">Toggle notifications</span>
//             </Button>
//           </div>

//           <div className="flex-1">
//             <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <Home className="h-4 w-4" />
//                 Dashboard
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <ShoppingCart className="h-4 w-4" />
//                 Orders
//                 <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
//                   6
//                 </Badge>
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
//               >
//                 <Package className="h-4 w-4" />
//                 Products{" "}
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <Users className="h-4 w-4" />
//                 Customers
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <LineChart className="h-4 w-4" />
//                 Analytics
//               </Link>
//             </nav>
//           </div>

//           <div className="mt-auto p-4">
//             <Card x-chunk="dashboard-02-chunk-0">
//               <CardHeader className="p-2 pt-0 md:p-4">
//                 <CardTitle>Upgrade to Pro</CardTitle>
//                 <CardDescription>
//                   Unlock all features and get unlimited access to our support
//                   team.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
//                 <Button size="sm" className="w-full">
//                   Upgrade
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col">

//         <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="shrink-0 md:hidden"
//               >
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle navigation menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="flex flex-col">
//               <nav className="grid gap-2 text-lg font-medium">
//                 <Link
//                   href="#"
//                   className="flex items-center gap-2 text-lg font-semibold"
//                 >
//                   <Package2 className="h-6 w-6" />
//                   <span className="sr-only">Acme Inc</span>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Home className="h-5 w-5" />
//                   Dashboard
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
//                 >
//                   <ShoppingCart className="h-5 w-5" />
//                   Orders
//                   <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
//                     6
//                   </Badge>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Package className="h-5 w-5" />
//                   Products
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Users className="h-5 w-5" />
//                   Customers
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <LineChart className="h-5 w-5" />
//                   Analytics
//                 </Link>
//               </nav>
//               <div className="mt-auto">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Upgrade to Pro</CardTitle>
//                     <CardDescription>
//                       Unlock all features and get unlimited access to our
//                       support team.
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Button size="sm" className="w-full">
//                       Upgrade
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>
//             </SheetContent>
//           </Sheet>
//           <div className="w-full flex-1">
//             <form>
//               <div className="relative">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search products..."
//                   className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
//                 />
//               </div>
//             </form>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="secondary" size="icon" className="rounded-full">
//                 <CircleUser className="h-5 w-5" />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>

//         <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
//   <div className="flex items-center">
//     <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
//   </div>
//           <div
//             className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
//             x-chunk="dashboard-02-chunk-1"
//           >
//             <div className="flex flex-col items-center gap-1 text-center">
//               <h3 className="text-2xl font-bold tracking-tight">
//                 You have no products
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 You can start selling as soon as you add a product.
//               </p>
//               <Button className="mt-4">Add Product</Button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
