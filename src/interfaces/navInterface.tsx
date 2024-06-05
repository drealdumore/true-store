import { Home, Package, Users } from "lucide-react";

import { MdOutlineManageAccounts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

interface NavInterface {
  title: string;
  icon: JSX.Element;
  href: string;
}

const menus: NavInterface[] = [
  {
    title: "Dashboard",
    icon: <Home />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <Package />,
    href: "/admin/products",
  },
  {
    title: "Accounts",
    icon: <MdOutlineManageAccounts />,
    href: "/admin/accounts",
  },
  {
    title: "Customers",
    icon: <Users />,
    href: "customers",
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline />,
    href: "setings",
  },
];

export default menus;
