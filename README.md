Steps to run / know
------------

1. npm install
2. start up mongo, create 'collection' Product
3. npm run dev <- runs webpack bundler and hot reloading
4. POST to localhost:3000/api/products

```
{
	"id": 1,
	"style": "G200",
	"description": "Best Tshirt in the world"
}
```
5. go to localhost:3000/graphiql, and query products
```
query{
  aProduct(id: "1"){
    id
    style
  }
}
```
6. If you want all Products:
```
query{
  allProducts{
    id
    style
    description
  }
}
```
7. All the graph stuff lives in server/graph
8. All mongo models live in db/models, controllers live in db/controllers
9. Graphql initialization with express lives in server/init/graphql
10. Server entry point is server/server.js and Application (front end) entry point is app/index.js

1. Use prettier, prettier babelrc
2. On save, have prettier auto run
3. Set up TRAVISCI, and code coverage
4. Set up Flow
5. Githook lint-staged husky --save-dev
