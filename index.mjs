import express from 'express';
import routes from './routes.mjs';
import morgan from 'morgan';


const PORT = 3000;
const app = express();

/**
 * Middlewares
 */
app.use(express.json({ extended: false }));
app.use(morgan('dev'));

/**
 * Route initialization
 */
app.use('/', routes);

/**
 * POrt definition
 */
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
