import { Router } from 'express';

import { storeHttp } from '../controllers/store.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { storeValidate } from '../helpers/store.js';

const routerStore = Router();

routerStore.get('/', [
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], storeHttp.storeGet );

routerStore.get('/search', [
    check('name', 'el nombre es necesario').trim().notEmpty(),
    validate
], storeHttp.storeGetQuery );

routerStore.post('/', [
    check('name', 'el nombre es necesario').trim().notEmpty(),
    check('farm', 'la granja es necesaria').trim().notEmpty(),
    check('size', 'el tamaño es necesario').trim().notEmpty(),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], storeHttp.storePost );

routerStore.put('/:id', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storePut );

routerStore.put('/activar/:id', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storeActivate );

routerStore.put('/desactivar/:id', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storeDesactivate );

export{
    routerStore
}