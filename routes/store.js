import { Router } from 'express';
import { storeHttp } from '../controllers/store.js';

const routerStore = Router();

routerStore.get('/', [], storeHttp.storeGet );

routerStore.get('/search', [], storeHttp.storeGetQuery );

routerStore.post('/', [], storeHttp.storePost );

export{ routerStore }