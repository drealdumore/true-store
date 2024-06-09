"use client";

import { useState, useMemo } from "react";
import Layout from "../Layout";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import React from "react";
import { useSearch } from "@/context/searchContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

const page = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "username", order: "asc" });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "johndoe",
      email: "johndoe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      username: "janesmith",
      email: "janesmith@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      username: "bobwilson",
      email: "bobwilson@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      username: "sarahjones",
      email: "sarahjones@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      username: "mikeanderson",
      email: "mikeanderson@example.com",
      role: "Editor",
      status: "Inactive",
    },
  ]);

  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => {
        const searchValue = search.toLowerCase();
        return (
          user.username.toLowerCase().includes(searchValue) ||
          user.email.toLowerCase().includes(searchValue) ||
          user.role.toLowerCase().includes(searchValue) ||
          user.status.toLowerCase().includes(searchValue)
        );
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [users, search, sort]);

  const { searchTerm } = useSearch();

  //   const filteredUsers = useMemo(() => {
  //     return users.filter((user) => {
  //       user.username.toLowerCase().includes(searchTerm.toLowerCase());
  //     });
  //   }, [users, searchTerm]);

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setSearch(e.target.value);
  const handleSort = (key: string) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "asc" });
    }
  };
  const handleUserAction = (
    user: {
      id?: number;
      username: any;
      email?: string;
      role?: string;
      status?: string;
    },
    action: string
  ) => {
    switch (action) {
      case "view":
        console.log(`Viewing user ${user.username}`);
        break;
      case "edit":
        console.log(`Editing user ${user.username}`);
        break;
      case "deactivate":
        console.log(`Deactivating user ${user.username}`);
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg md:text-2xl">Users</h1>

            <div className="w-full pl-10">
              <Input
                type="search"
                placeholder="Search users..."
                value={search}
                onChange={handleSearch}
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              />
            </div>

            <Button className="ml-auto" size="sm">
              Add User
            </Button>
          </div>

          <main className="flex flex-1 flex-col gap-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() => handleSort("username")}
                    >
                      Username
                      {sort.key === "username" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() => handleSort("email")}
                    >
                      Email
                      {sort.key === "email" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() => handleSort("role")}
                    >
                      Role
                      {sort.key === "role" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className="cursor-pointer"
                      onClick={() => handleSort("status")}
                    >
                      Status
                      {sort.key === "status" && (
                        <span className="ml-1">
                          {sort.order === "asc" ? "\u2191" : "\u2193"}
                        </span>
                      )}
                    </TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        {user.username}
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            user.status === "Active"
                              ? "bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
                              : "bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400"
                          } rounded-full px-2 py-1 text-xs font-medium`}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleUserAction(user, "view")}
                          >
                            <EyeIcon className="h-4 w-4" />
                            <span className="sr-only">View user</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleUserAction(user, "edit")}
                          >
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit user</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleUserAction(user, "deactivate")}
                          >
                            <UserXIcon className="h-4 w-4" />
                            <span className="sr-only">Deactivate user</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Card>
            <CardHeader>
              <CardTitle>Add New Admin</CardTitle>
              <CardDescription>Fill out the form to create a new admin account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="permissions">Permissions</Label>
                  <Select id="permissions" defaultValue="admin">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Customer</SelectItem>
                      <SelectItem value="viewer">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Create Admin
                </Button>
              </form>
            </CardContent>
          </Card>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default page;

function BellIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function EyeIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FilePenIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function LockIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Package2Icon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SettingsIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserXIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="17" x2="22" y1="8" y2="13" />
      <line x1="22" x2="17" y1="8" y2="13" />
    </svg>
  );
}

function UsersIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
