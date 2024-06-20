import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "../App";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/client/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "True Store",
  description:
    "Butter soft, affordable, high quality fitted premium tees for men. Super versatile shirts that can be worn for any occasion including date nights, chilling at home or athletic activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <body> */}
        <body className={inter.className}>
          <Navbar />
          <App>{children}</App>

          <Toaster position="bottom-center" reverseOrder={false} />
        </body>
      </html>
    </ClerkProvider>
  );
}
