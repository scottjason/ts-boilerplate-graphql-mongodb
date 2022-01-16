# Authentication Boilerplate with GraphQl

## Description

Progressive registration and authentication boilerplate with GraphQl.

Built with React, Typescript, GraphQl with Apollo Client, Apollo Server, Node, Express Mongo and Webpack.

Uses JWT token authentication with an HMAC SHA256 hashing algorithm.

Unexpired tokens on sign-out are stored in a collection in MongoDb and are checked against in the authentication middleware.

## Deployed App

[Deployed on heroku, open app.](https://graphql-authentication.herokuapp.com/)

### Installing

```
git clone https://github.com/scottjason/graphql-authentication.git
```

```
cd graphql-authentication && npm i
```

```
touch .env
```

### Running locally

```
npm run start-dev
```

Then visit localhost:3000
