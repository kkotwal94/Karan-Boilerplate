import path from 'path';
import db from '../db';

const { controllers } = db;

const usersController = controllers && controllers.users;
const productsController = controllers && controllers.products;
const brandsController = controllers && controllers.brands;

export default app => {
  /*
  app.get('/', (req, res) => {
    res.sendfile(path.resolve('app/index.html'));
  });*/

  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
  }

  if (productsController) {
    app.get('/api/products', productsController.all);
    app.post('/api/products', productsController.add);
    app.put('/api/products/:id', productsController.update);
    app.delete('/api/products', productsController.remove);
  }

  if (brandsController) {
    app.get('/api/brands', brandsController.all);
    app.post('/api/brands', brandsController.add);
    app.put('/api/brands/:id', brandsController.update);
    app.delete('/api/brands/:id', brandsController.remove);
  }
};
