"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

const authProvider = ({ children }: PropType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default authProvider;
