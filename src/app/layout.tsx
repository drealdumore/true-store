import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin/authProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "True Store",
  description:
    "We produce butter soft, affordable, high quality fitted premium tees for men. Super versatile shirts that can be worn for any occasion including date nights, chilling at home or athletic activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <App>{children}</App>
        </AuthProvider>

        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
