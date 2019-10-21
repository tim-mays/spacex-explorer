import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';
import banner from '../banner';

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV.trim() === 'development'
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(banner.devtools, `GraphQL server started on port ${PORT}\n\n`)
);
