import express from 'express';
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
        this.middlewares();
    };

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    };

    routes(){
        // this.app.use();
    };

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`Server listenner on port ${this.port}`);
        });
    };
};

export default Server;