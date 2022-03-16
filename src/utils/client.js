import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// Initialize Apollo Client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://graphql.sketch.cloud/api/", //TODO: this could be in the env variables
  })
});
