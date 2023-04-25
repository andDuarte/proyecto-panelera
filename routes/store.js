import { Router } from 'express';
import { storeHttp } from '../controllers/store.js';

import { check } from 'express-validator';
import { validate } from '../middlewares/validate-fields.js';

const routerStore = Router();

routerStore.get('/', [], storeHttp.storeGet );

routerStore.get('/search', [
    check('name', 'query name es necesario').trim().notEmpty(),
    validate
], storeHttp.storeGetQuery );

routerStore.post('/', [
    check('name', 'body name es necesario').trim().notEmpty(),
    check('farm', 'body granja es necesaria').trim().notEmpty(),
    check('size', 'body tamaño es necesario').trim().notEmpty(),
    validate
], storeHttp.storePost );

export{ routerStore }