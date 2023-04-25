import express from 'express';
import { connection } from '../database/connection.js';
import cors from 'cors'

// routes
import { routerStore } from '../routes/store.js';
import { routerInventory } from '../routes/inventory.js';
import{routerUsers} from '../routes/users.js'

class Server {
    constructor(){
        this.app = express();
        this.connect();
        this.middlewares();
        this.routes();
    }

    async connect() {
        await connection();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/bodega', routerStore );
        this.app.use('/inventario', routerInventory );
        this.app.use('/users', routerUsers );
    }

    listen() {
        this.app.listen('3000',()=>{console.log('server online')});
    }
}

export { Server }