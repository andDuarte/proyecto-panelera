import express from 'express';
import { connection } from '../database/connection.js';
import cors from 'cors'

class Server {
    constructor(){
        this.app = express();
        this.connect();
        this.middlewares();
        // this.routes()
    }

    async connect() {
        await connection();
    }

    middlewares() {
        this.app.use(express.json);
        this.app.use(cors());
    }

    routes() {
        // routes
    }

    listen() {
        this.app.listen('3000',()=>{console.log('server online')});
    }
}

export { Server }