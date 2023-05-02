import { Router } from 'express';
import { inventoryHttp } from '../controllers/inventory.js';

import { check } from 'express-validator';
import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { inventoryValidate } from '../helpers/inventory.js';
import { storeValidate } from '../helpers/store.js';

const routerInventory = Router();

routerInventory.get('/', [], inventoryHttp.inventoryGet );

routerInventory.get('/search', [
    check('category', 'query categoria es necesaria').trim().notEmpty(),
    validate
], inventoryHttp.inventoryGetQuery );

routerInventory.post('/', [
    check('name', 'body nombre elemento es necesario').trim().notEmpty(),
    check('category', 'body categoria es necesaria').trim().notEmpty(),
    check('store', 'body bodega es necesaria').trim().notEmpty(),
    check('store', 'body bodega no es valida').isMongoId(),
    check('store').custom(storeValidate.storeId),
    check('mark', 'body marca es necesaria').trim().notEmpty(),
    check('mark', 'body marca no es valida').isMongoId(),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], inventoryHttp.inventoryPost );

routerInventory.put('/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    // check('store', 'body store no es valida').isMongoId(),
    // check('store').custom(storeValidate.storeId),
    check('id', 'params id no es valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryPut );

routerInventory.put('/activar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'params id no es valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryActivate );

routerInventory.put('/desactivar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'params id no es valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryDesactivate );

export{ routerInventory }