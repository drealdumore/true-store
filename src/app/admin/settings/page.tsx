import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Layout from "../Layout";

export default function Component() {
  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg md:text-2xl">Orders</h1>
          </div>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <form className="grid gap-6 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Store Details</CardTitle>
                  <CardDescription>
                    Update your store&#39;s name, description, and logo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input id="storeName" defaultValue="True Store" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="storeDescription">Store Description</Label>
                    <Textarea
                      id="storeDescription"
                      defaultValue="Welcome to True Store, your one-stop shop for high-quality products."
                      rows={3}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="storeLogo">Store Logo</Label>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        alt="Store Logo"
                        width={64}
                        height={64}
                        className="rounded-md"
                      />
                      <Button variant="outline" size="sm">
                        Upload Logo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </main>
        </div>
      </div>
    </Layout>
  );
}
