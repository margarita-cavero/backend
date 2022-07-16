import express from 'express';
import cors from 'cors';

import { connectDB } from '../db/config';

import routerContact from '../routes/contact.routes';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            contact: '/contact'
        }

        this.middlewares();
        this.dbConnect();
        this.routes();
    };

    async dbConnect(){
        await connectDB();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        }));
    };

    routes() {
        this.app.use(this.path.contact, routerContact);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listenner on port ${this.port}`);
        });
    };
};

export default Server;