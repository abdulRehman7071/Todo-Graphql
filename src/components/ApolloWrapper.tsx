"use client";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ReactNode } from "react";

interface MyAppProps {
  children: ReactNode;
}

function MyApp({ children }: MyAppProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default MyApp;
