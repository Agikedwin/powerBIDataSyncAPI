import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { context } from "./context";   


import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],

});

const port = 3001;
server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
