import express from 'express';
import cors from 'cors';
import useApiRouter from './routes';
import generateDoc from './utils/generateDoc';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
generateDoc(app);

useApiRouter(app);

export default app;
