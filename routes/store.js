import { Router } from 'express';
import { storeHttp } from '../controllers/store.js';

import { check } from 'express-validator';
import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { storeValidate } from '../helpers/store.js';

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
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], storeHttp.storePost );

routerStore.put('/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'body id no valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storePut );

routerStore.put('/activar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'body id no valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storeActivate );

routerStore.put('/desactivar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'body id no valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storeDesactivate );

export{ routerStore }