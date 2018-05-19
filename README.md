## Steps to run / know

1.  npm install
2.  start up mongo, create 'collection' Product
3.  npm run dev <- runs webpack bundler and hot reloading
4.  POST to localhost:3000/api/products

```
{
	"id": 1,
	"style": "G200",
	"description": "Best Tshirt in the world"
}
```

5.  Download graphiql, go to localhost:3000/graphql, and query products

```
query{
  aProduct(id: "1"){
    id
    style
  }
}
```

6.  If you want all Products:

```
query{
  allProducts{
    id
    style
    description
  }
}
```

7.  All the graph stuff lives in server/graph
8.  All mongo models live in db/models, controllers live in db/controllers
9.  Graphql initialization with express lives in server/init/graphql
10. Server entry point is server/server.js and Application (front end) entry point is app/client.js
11. There is server sided rendering the parallels are client.js and pageRender.js
12. ApolloClient is hooked up at client.js
13. Jest / Enzyme is installed so tests can be created

### Library / NPM Modules:

1.  Apollo Libraries to talk to graphql, gql libraries for server to talk to client
2.  Material UI for UI building
3.  React-Router 4 for Front-End Routing
4.  Express / Mongo for web framework and DB
5.  Mongoose for Mongo ORM
6.  JEST / Enzyme for test framework
7.  React Cosmos (testing out) for scaffolding ui components in isolated environments
8.  Morgan for logging http request and runtime
9.  Flow and Prettier for type checking and code clean up
10. Webpack Hot Reloading / Middleware to hot reload front-end react components, Nodemon to do it serverside
11. Collection library: Lodash, and HOC React library Recompose to manipulate prebuilt Higher order components

### Description:

Goal is to create a isomorphic boilerplate around graphql / apollo / mongo / react and generate screens quickly and manipulate data. Some milestones are experimenting with data binding (adding / saving brands + colors) and others are guaging the amount of effort it takes to create a new graph model / type to resolve a new set of necessary data. Also want to gauge reactrouter 4 vs reactrouter 3.

## High Effort TODOS:

1.  Create Page to navigate between different modules ( Brand, Products, Catalog)
1.  Create Brand Page (add, delete, update Brands)
1.  Add Colors to brand and remove colors from brands
1.  Implement Authentication (Local strategy / OAuth via PassportJS)
1.  Integrate Redux with Apollo to track User / Session data
1.  SSR for material ui in pageRender.js

## LOW EFFORT TODOS:

1.  Set up TRAVISCI, and code coverage
2.  Set up Flow
3.  Githook lint-staged husky --save-dev
4.  Remove React-HMRE and replace with react-hot-loader
5.  Fix middleware for /graphiql (gets overriden by apollo ssr middleware)
6.  Set up dangerJS to prettify / test before opening prs
7.  Generate Documentation based off Pull Requests and DocumentationJS
