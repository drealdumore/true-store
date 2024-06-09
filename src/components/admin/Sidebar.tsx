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
                {menu.badge && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {menu.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;