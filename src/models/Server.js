import express from 'express';
import cors from 'cors';

import { connectDB } from '../db/config';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.dbConnect();
        this.routes();
    };

    async dbConnect(){
        await connectDB();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    };

    routes() {
        // this.app.use();
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listenner on port ${this.port}`);
        });
    };
};

export default Server;