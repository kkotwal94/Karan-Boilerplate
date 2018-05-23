import React from 'react';
import fetch from 'cross-fetch';
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import CssBaseline from '@material-ui/core/CssBaseline';
import createRoutes from '../../app/routes';
import staticAssets from './static-assets';

const routes = createRoutes();

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
});

export default (req, res) => {
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
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
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
          <CssBaseline>
            <StaticRouter location={req.url} context={context}>
              {routes}
            </StaticRouter>
          </CssBaseline>
        </MuiThemeProvider>
      </JssProvider>
    </ApolloProvider>
  );

  getDataFromTree(app).then(appContent => {
    const content = renderToString(app);
    const css = sheetsRegistry.toString();
    const html = `<!DOCTYPE html>
      <html>
        <head>
          <title>Product Admin</title>
          ${staticAssets.createStylesheets()}
          ${staticAssets.createIcons()}
          ${staticAssets.createTrackingScript()}
        </head>
        <body>
          <div id="app">${content}</div>
          <style id="jss-server-side">${css}</style>
          ${staticAssets.createAppScript()}
        </body>
      </html>`;
    res.status(200);
    res.send(html);
    res.end();
  });
};
