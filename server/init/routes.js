import path from 'path';
import { controllers } from '../db';

const productsController = controllers && controllers.products;

export default app => {
  app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendfile(path.join(__dirname, '../../app', 'index.html'));
  });

  app.get('/api/test', (req, res) => {
    res.send('Test Reached');
  });

  if (productsController) {
    app.get('/api/products', productsController.all);
    app.post('/api/products', productsController.add);
  }
};
