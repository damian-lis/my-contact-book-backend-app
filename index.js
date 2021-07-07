import { PORT } from './env.js';
import express from 'express';
import connectDB from './config/db.js';
import contactRoutes from './routes/contacts.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors'

connectDB();

const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use('/contact', contactRoutes);
app.use('/auth', authRoutes);

app.listen(
  process.env.PORT || PORT,
  console.log(`Server is running on ${PORT}`)
);
