import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log({ env: process.env.BACKEND_URL });
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;
