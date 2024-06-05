"use client";
import { SearchProvider } from "@/context/searchContext";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

const authProvider = ({ children }: PropType) => {
  return (
    <SessionProvider>
      <SearchProvider>{children}</SearchProvider>
    </SessionProvider>
  );
};

export default authProvider;
