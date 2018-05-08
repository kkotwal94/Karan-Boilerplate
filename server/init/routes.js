import path from 'path';
import db from '../db';

const { controllers } = db;

const productsController = controllers && controllers.products;
console.log(controllers);

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
    app.put('/api/products', productsController.update);
    app.delete('/api/products', productsController.delete);
  }
};
