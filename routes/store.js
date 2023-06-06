import { Router } from 'express';

import { storeHttp } from '../controllers/store.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { storeValidate } from '../helpers/store.js';

import { farmValidate } from '../helpers/farm.js';

const routerStore = Router();

routerStore.get('/', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], storeHttp.storeGet );

routerStore.get('/search', [
    check('name', 'nombre es necesario').trim().notEmpty(),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], storeHttp.storeGetQuery );

routerStore.post('/', [
    check('name', 'nombre es necesario').trim().notEmpty(),
    check('farm', 'granja es necesaria').trim().notEmpty(),
    check('farm').custom(farmValidate.farmId),
    check('size', 'tamaño bodega es necesario').trim().notEmpty(),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], storeHttp.storePost );

routerStore.put('/:id', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    check('id', 'id no es valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storePut );

routerStore.put('/activar/:id', [
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storeActivate );

routerStore.put('/desactivar/:id', [
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(storeValidate.storeId),
    validate
], storeHttp.storeDesactivate );

export{
    routerStore
}