import { Router } from 'express';
import { inventoryHttp } from '../controllers/inventory.js';

import { check } from 'express-validator';
import { validate } from '../middlewares/validate-fields.js'

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
    validate
], inventoryHttp.inventoryPost );

export{ routerInventory }