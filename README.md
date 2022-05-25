# Full Stack Boilerplate with JWT Authentication

### Database: Mongo, Mongoose ODM

## Description

Full Stack boilerplate with JWT authentication.

Built with React, Typescript, Node, Express, GraphQL, MongoDB, Mongoose, and Webpack.

Uses custom hooks and [code splitting optimization](https://reactjs.org/docs/code-splitting.html) via route-based component lazy loading with the Suspense component.

Unexpired tokens on sign-out are stored in a Mongo collection and checked against on all authentication attempts.

## Deployed App

[Deployed on heroku, open app.](https://ts-auth-graphql-mongodb.herokuapp.com)

## Installation

Clone the repo:

```bash

git clone https://github.com/scottjason/ts-boilerplate-graphql-mongodb.git

```

Then cd into the root directory and run `npm install`.

[Create a free MongoDB Atlas account](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) and deploy a free cluster, generate your Mongo connection uri.

Once you have your Mongo uri, create a .env file in the root directory of the repo and copy and paste the below, then enter in the values (the prod origin isn't needed for development):

```bash
DEV_ORIGIN=http://localhost:8080
PROD_ORIGIN=<your-prod-origin>
DB_NAME=<your-db-name>
DB_USERNAME=<your-db-username>
DB_PASSWORD=<your-db-password>
CLUSTER=<your-cluster-name>
JWT_SECRET=<your-jwt-secret>
```

For reference, the Mongo connection uri in database/index.ts looks like this:
`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER}.${DB_NAME}.net?retryWrites=true&w=majority`;

Once complete, run `npm run dev` to start development and your browser should open up to `http://locahost:8080`.

## License

MIT License

Copyright (c) 2022 Scott Jason

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
