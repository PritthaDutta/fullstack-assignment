import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './database/mongodb'
import cardRoutes from './routes/cardRoutes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
connectDB();

// Ping route
app.get('/', (req: Request, res: Response) => {
  res.send("Welcome to Help Center Backend");
});

app.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'pong' });
});

app.use('/api', cardRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
