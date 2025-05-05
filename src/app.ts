import express, { Application } from 'express';
import path from 'path';
import router from './router/apiRouter';
import globalErrorHandler from './middleware/globalErrorHandler';

const app: Application = express();

//! Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

//! Routes
app.use('/api/v1', router);

// Global Error Handler 
app.use(globalErrorHandler);

export default app; 