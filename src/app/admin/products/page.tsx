"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Layout from "../Layout";
import { useState, useMemo, SVGProps, useEffect } from "react";
import { useSearch } from "@/context/searchContext";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import ProductRow from "@/components/admin/ProductRow";
import Popup from "@/components/admin/Popup";

export default function Component() {
  const [productss, setProducts] = useState([]);
  const [openPopup, setOpenPopUp] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setLoading(true));

  //   axios
  //     .get("/api/get_products")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err))
  //     .finally(() => dispatch(setLoading(false)));
  // }, [updateTable]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      stock: 50,

      quantity: 7,
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      description: "Comfortable and adjustable office chair for long hours",
      price: 249.99,
      stock: 20,

      quantity: 7,
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      description: "Tactile and responsive mechanical keyboard for gaming",
      price: 79.99,
      stock: 30,

      quantity: 7,
    },
    {
      id: 4,
      name: "Smart TV",
      description: "4K Ultra HD smart TV with built-in streaming apps",
      price: 499.99,
      stock: 15,

      quantity: 7,
    },
    {
      id: 5,
      name: "Fitness Tracker",
      description: "Advanced fitness tracker with heart rate monitoring",
      price: 59.99,
      stock: 40,

      quantity: 7,
    },
  ];

  const { searchTerm } = useSearch();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  interface IProduct {
    id: string;
    name: string;
    img: string;
    price: number;
    description: string;
    quantity: number;
    stock: number;
  }

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
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  // {productss.map((product: IProduct, index) => (
                  <ProductRow
                    key={product.id}
                    srNo={index + 1}
                    setOpenPopUp={setOpenPopUp}
                    setUpdateTable={setUpdateTable}
                    product={product}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
      {openPopup && (
        <Popup setOpenPopup={setOpenPopUp} setUpdatetable={setUpdateTable} />
      )}
    </Layout>
  );
}
