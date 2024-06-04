"use client";

import LoginPage from "@/components/admin/Login";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";

const Layout = () => {
  const isLoading = useAppSelector((store) => store.loadingReducer);
  const {data: session} = useSession()

  if(!session?.user) {
    return <LoginPage/>;
  }

  return <div>Layout</div>;
};

export default Layout;
