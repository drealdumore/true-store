"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Layout from "../Layout";
import { useState, useMemo, SVGProps } from "react";
import { useSearch } from "@/context/searchContext";

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      stock: 50,
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      description: "Comfortable and adjustable office chair for long hours",
      price: 249.99,
      stock: 20,
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      description: "Tactile and responsive mechanical keyboard for gaming",
      price: 79.99,
      stock: 30,
    },
    {
      id: 4,
      name: "Smart TV",
      description: "4K Ultra HD smart TV with built-in streaming apps",
      price: 499.99,
      stock: 15,
    },
    {
      id: 5,
      name: "Fitness Tracker",
      description: "Advanced fitness tracker with heart rate monitoring",
      price: 59.99,
      stock: 40,
    },
  ];

  const { searchTerm } = useSearch();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
          <Button className="ml-auto" size="sm">
            Add product
          </Button>
        </div>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock} in stock</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="outline" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </Layout>
  );
}

function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
