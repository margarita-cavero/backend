import express from 'express';
import cors from 'cors';

import config from '../config';
import { connectDB } from '../db/config';

import routerContact from '../routes/contact.routes';
import routerWorks from '../routes/works.routes';
import routerAuth from '../routes/auth.routes';

class Server {
    constructor() {
        this.app = express();
        this.port = config.port;
        this.path = {
            contact: '/contact',
            works: '/works',
            auth: '/auth'
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
        this.app.use(this.path.works, routerWorks);
        this.app.use(this.path.auth, routerAuth);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listenner on port ${this.port}`);
        });
    };
};

export default Server;