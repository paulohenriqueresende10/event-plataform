import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u0lqfi0g3a01t7hq2f7m03/master',
    cache: new InMemoryCache()
})