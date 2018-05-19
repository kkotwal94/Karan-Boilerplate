import React from 'react';
import fetch from 'node-fetch';
import { renderToString } from 'react-dom/server';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from '../../app/App';
import staticAssets from './static-assets';

export default (req, res) => {
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
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  renderToStringWithData(app).then(() => {
    const content = renderToString(app);
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
};
