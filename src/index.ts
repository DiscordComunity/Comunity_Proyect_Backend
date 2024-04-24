import express from 'express';
import router from './router/index';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
