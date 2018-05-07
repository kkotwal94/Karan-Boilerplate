import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(webpackConfig());

app.use(
  webpackDevMiddleWare(compiler, {
    logLevel: 'warn',
    publicPath: webpackConfig().output.publicPath,
  })
);

// Step 3: Attach the hot middleware to the compiler & the server
app.use(
  webpackHotMiddleWare(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  })
);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendfile(path.join(__dirname, '../app', 'index.html'));
});

app.get('/api/test', (req, res) => {
  res.send('Test Reached');
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
  //const addr = app.address();
  console.log('Boilerplate listening', process.env.IP + ':' + process.env.PORT);
});
