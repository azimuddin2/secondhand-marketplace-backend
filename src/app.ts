import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Backend Software Running!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
