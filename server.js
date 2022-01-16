import path from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import { connectToMongo } from './config/database';
import webpackDevConfig from './webpack/webpack.dev.config';
import applyMiddleware from './config/middleware/index';

const app = express();
const isDevelopment = process.env.NODE_ENV === 'development';
const staticDir = isDevelopment ? './dist' : '.';

const devConfig = async () => {
  const dotenv = await import('dotenv');
  dotenv.config({ path: path.resolve(__dirname, '.env') });
};

const applyDevMiddleware = async () => {
  const webpack = await (await import('webpack')).default;
  const middleware = await (await import('webpack-dev-middleware')).default;
  const compiler = webpack(webpackDevConfig);
  const opts = { writeToDisk: true };
  app.use(middleware(compiler, opts));
};

applyMiddleware(app);
if (isDevelopment) {
  applyDevMiddleware();
}

app.use(express.static(path.join(__dirname, staticDir)));

app.get('*', (_req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, staticDir),
  });
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => ({ req, res }),
});

async function startServer() {
  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    introspection: true,
    playground: true,
  });
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server started!');
  });
}

(async function init() {
  if (isDevelopment) {
    await devConfig();
  }
  connectToMongo(startServer);
})();
