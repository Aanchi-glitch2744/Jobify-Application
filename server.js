import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 5100;
import mongoose from "mongoose";
import morgan from 'morgan';
import {body, validationResult} from "express-validator";
import jobRouter from './routers/jobRouter.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import authRouter from './routers/authRouter.js';

//Morgan: An HTTP request logger middleware for node.js
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Middleware setup
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Routing
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/auth', authRouter);

//Not Found Middleware : Route not found cases
app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' });
});

//Error middleware : runs anywhere `throw new Error` is executed
app.use(errorHandlerMiddleware);

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1); //calls error middleware;
}