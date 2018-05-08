import path from 'path';
import db from '../db';

const { controllers } = db;

const usersController = controllers && controllers.users;
const productsController = controllers && controllers.products;

export default app => {
  app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../../app', 'index.html'));
  });

  app.get('/api/test', (req, res) => {
    res.send('Test Reached');
  });

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
};
