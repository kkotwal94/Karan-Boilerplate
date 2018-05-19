import React from 'react';
import fetch from 'node-fetch';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Client from '../../app/Client';
import App from '../../app/App';
import staticAssets from './static-assets';

export default (req, res) => {
  /*
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'graphql',
      fetch: fetch,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  });

  const context = {};
  const app = (
    <ApolloProvider client={client}>
      <Client />
    </ApolloProvider>
  );

  getDataFromTree(App).then(() => {
    const content = renderToString(<App />);
    const html = `<!DOCTYPE html>
      <html>
        <head>
          <title>Product Admin</title>
        </head>

        <body>
          <div id="app">${content}</div>
          ${staticAssets.createAppScript()}
        </body>
      </html>`;
    res.status(200);
    res.send(html);
    res.end();
  });
  */
  const content = renderToString(<App />);
  res.send(`
   <!DOCTYPE html>
     <html>
       <head>
         <title>Product Admin</title>
       </head>

       <body>
         <div id="app">${content}</div>
         ${staticAssets.createAppScript()}
       </body>
     </html>
 `);
};
