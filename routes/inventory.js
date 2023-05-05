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
    // check('token', 'el token es necesario').trim(),notEmpty(),
    // check('token').custom(validateToken),
    // validate
], inventoryHttp.inventoryGet );

routerInventory.get('/search', [
    check('category', 'la categoria es necesaria').trim().notEmpty(),
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], inventoryHttp.inventoryGetQuery );

routerInventory.post('/', [
    check('name', 'el nombre del elemento es necesario').trim().notEmpty(),
    check('category', 'la categoria es necesaria').trim().notEmpty(),
    check('store', 'la bodega es necesaria').trim().notEmpty(),
    check('store', 'la bodega no es valida').isMongoId(),
    check('store').custom(storeValidate.storeId),
    check('mark', 'la marca es necesaria').trim().notEmpty(),
    check('mark', 'la marca no es valida').isMongoId(),
    check('mark').custom(markValidate.markId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], inventoryHttp.inventoryPost );

routerInventory.put('/:id', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    // check('store', 'la bodega no es valida').isMongoId(),
    // check('store').custom(storeValidate.storeId),
    // check('mark', 'la marca no es valida').isMongoId(),
    // check('mark').custom(markValidate.markId),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryPut );

routerInventory.put('/activar/:id', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryActivate );

routerInventory.put('/desactivar/:id', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(inventoryValidate.inventoryId),
    validate
], inventoryHttp.inventoryDesactivate );

export{
    routerInventory
}