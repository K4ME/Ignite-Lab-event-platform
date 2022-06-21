import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ng6hrz016s01xyad6dd752/master',
  cache: new InMemoryCache()
})