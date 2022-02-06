import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import routes from './router';
import logger from './config/logger';
import { ConnectDB } from './config/database';
import { ErrorMiddleware } from './middlewares/error.middleware';
dotenv.config();
const app = express();

// core setup
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || 8080, () => {
    // router setup
    routes(app);
    app.use(ErrorMiddleware);
    // db connection
    ConnectDB();
    logger.info(`🚀🚀🚀 Server listing on port:${process.env.PORT} 🔥🔥🔥`);
});
