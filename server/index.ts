import express = require('express');
import { graphqlHTTP } from 'express-graphql'
import schema from "./presentation/schemas/schema";
import {dbClient} from "./data/datasource/db/db_service";

const app = express();

dbClient.connect() // TODO: le déplacer ailleurs

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')