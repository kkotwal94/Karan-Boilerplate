import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import playground from 'graphql-playground-middleware-express';
import bodyParser from 'body-parser';
import schema from './graph/schema';
import { makeExecutableSchema } from 'graphql-tools';

const app = express();

const webpackCompiled = webpackConfig();
const compiler = webpack(webpackCompiled);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
app.use(morgan('dev'));

app.use(
  webpackDevMiddleWare(compiler, {
    logLevel: 'warn',
    publicPath: webpackCompiled.output.publicPath,
  })
);

app.use(
  webpackHotMiddleWare(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  })
);

app.post('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendfile(path.join(__dirname, '../app', 'index.html'));
});

app.get('/api/test', (req, res) => {
  res.send('Test Reached');
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
  //const addr = app.address();
  console.log(`GraphiQL is now running on ${process.env.IP}:${process.env.PORT}/graphiql`);
});
