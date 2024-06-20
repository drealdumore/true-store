"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import React from "react";
import { SearchProvider } from "@/context/searchContext";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SearchProvider>{children}</SearchProvider>
    </Provider>
  );
};

export default App;
