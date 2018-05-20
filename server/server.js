import express from 'express';
import morgan from 'morgan';
import db from './db';
import { isDebug } from '../config/app';
import initHotLoader from './init/hotLoader';
import initExpress from './init/express';
import initGraphQL from './init/graphql';
import initRoutes from './init/routes';
import renderSSR from './render/pageRender';

const app = express();

db.connect();

app.use(morgan('dev'));

initHotLoader(app, isDebug);

initExpress(app);

initGraphQL(app);

initRoutes(app);

app.get('*', (req, res) => {
  renderSSR(req, res);
});

app.listen(app.get('port'), () => {
  //const addr = app.address();
  console.log(`GraphiQL is now running on localhost:${app.get('port')}/graphiql`);
});
