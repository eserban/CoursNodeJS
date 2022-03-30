import express from 'express';
import routes from './routes.mjs';


const PORT = 3000;

const app = express();
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
