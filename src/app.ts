import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import router from './routes/router';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

export default app;
