import { Router } from 'express';

import { inventoryHttp } from '../controllers/inventory.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { inventoryValidate } from '../helpers/inventory.js';

import { storeValidate } from '../helpers/store.js';

import { markValidate } from '../helpers/mark.js';

const routerInventory = Router();

routerInventory.get('/', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], inventoryHttp.inventoryGet );

routerInventory.get('/search', [
    check('category', 'categoria es necesaria').trim().notEmpty(),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], inventoryHttp.inventoryGetQuery );

routerInventory.post('/', [
    check('name', 'nombre del elemento es necesario').trim().notEmpty(),
    check('store', 'bodega es necesaria').trim().notEmpty(),
    check('store', 'bodega no valida').isMongoId(),
    check('store').custom(storeValidate.storeId),
    check('mark', 'marca es necesaria').trim().notEmpty(),
    check('mark', 'marca no valida').isMongoId(),
    check('mark').custom(markValidate.markId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], inventoryHttp.inventoryPost );

routerInventory.put('/:id', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    // check('store', 'bodega es necesaria').trim().notEmpty(),
    check('store', 'bodega no valida').isMongoId(),
    check('store').custom(storeValidate.storeId),
    // check('mark', 'marca es necesaria').trim().notEmpty(),
    check('mark', 'marca no valida').isMongoId(),
    check('mark').custom(markValidate.markId),
    check('id', 'id no valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryPut );

routerInventory.put('/activar/:id', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'id no valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryActivate );

routerInventory.put('/desactivar/:id', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'id no valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryDesactivate );

export{
    routerInventory
}