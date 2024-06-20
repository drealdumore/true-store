import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import React, { Dispatch, SVGProps, SetStateAction } from "react";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  stock: number;
}

interface PropsType {
  srNo: number;
  setOpenPopUp: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct | any;
}

const ProductRow = ({
  srNo,
  setOpenPopUp,
  setUpdateTable,
  product,
}: PropsType) => {
  const onEdit = () => {
    setOpenPopUp(true);
  };

  const onDelete = () => {
    console.log("onDelete");
  };

  return (
    <>
      <TableRow key={product.id}>
        <TableCell className="font-medium">
          {/* <Image src={product.img} alt={product.name} height={40} width={40} /> */}
        </TableCell>
        <TableCell className="font-medium">{product.name}</TableCell>
        <TableCell>{product.description}</TableCell>
        <TableCell>${product.price.toFixed(2)}</TableCell>
        <TableCell>{product.stock} in stock</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={onEdit}>
              <FilePenIcon className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="outline" size="icon" onClick={onDelete}>
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductRow;

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
