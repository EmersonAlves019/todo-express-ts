import express from 'express';
import appRoutes from './routes/index.routes';

const app = express();

app.use(express.json());

app.use(appRoutes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})