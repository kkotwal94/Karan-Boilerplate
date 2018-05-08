import path from 'path';
export default app => {
  app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendfile(path.join(__dirname, '../../app', 'index.html'));
  });

  app.get('/api/test', (req, res) => {
    res.send('Test Reached');
  });
};
