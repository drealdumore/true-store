"use client";

import { SearchProvider } from "@/context/searchContext";

const App = ({ children }: { children: React.ReactNode }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default App;
