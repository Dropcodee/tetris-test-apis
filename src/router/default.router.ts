import { Router } from "express";
import {Request, Response} from 'express'
const defaultRouter = Router();

defaultRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Yayyyy Welcome to Tetris 👾👾🧱',
  });
});

defaultRouter.get('/healthCheck', (req: Request, res: Response) => {
  res.status(200).json({ message: 'success' });
});

export default defaultRouter;