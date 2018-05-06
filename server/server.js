import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Dota 2');
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
  //const addr = app.address();
  console.log('Chat server listening at', process.env.IP + ':' + process.env.PORT);
});
