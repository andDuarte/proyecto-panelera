import { Router } from 'express';
import { inventoryHttp } from '../controllers/inventory.js';

const routerInventory = Router();

routerInventory.get('/', [], inventoryHttp.inventoryGet );

routerInventory.get('/search', [], inventoryHttp.inventoryGetQuery );

routerInventory.post('/', [], inventoryHttp.inventoryPost );

export{ routerInventory }