import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface PropsType {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdatetable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdatetable }: PropsType) => {
  const productData = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  const [inputData, setInputData] = useState({
    name: productData.name,
    category: "men",
    price: productData.price,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .put(`/api/edit_product/${productData.id}`, inputData)
      .then((res) => {
        makeToast("Product updated successfully!!");
        setUpdatetable((prevState) => !prevState);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        setOpenPopup(false);
      });
  };

  return (
    <>
      <Dialog>
        <Button variant="outline" onClick={() => setOpenPopup(false)}>
          CLOSE
        </Button>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      required
                      defaultValue="Cozy Blanket"
                      type="text"
                      placeholder="Name"
                      value={inputData.name}
                      onChange={(e) =>
                        setInputData({ ...inputData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" type="number" defaultValue={29.99} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    defaultValue="Warm and Soft for Chilly Nights"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inventory">Inventory Count</Label>
                  <Input id="inventory" type="number" defaultValue={50} />
                </div>
                <div className="space-y-2">
                  <Label>Product Image</Label>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Product Image"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                    <Button variant="outline">
                      <UploadIcon className="w-4 h-4 mr-2" />
                      Change Image
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </form>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popup;

function UploadIcon(
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
