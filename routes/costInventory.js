import { Router } from 'express';

import { costInventoryHttp } from '../controllers/costInventory.js';

import * as authJwt from '../middlewares/validate-jwt.js';

import * as verifySingup from "../middlewares/verifySignup.js";

// import { validateToken } from '../middlewares/validate-jwt.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { costInventoryValidate } from '../helpers/costInventory.js';

const routerCost = Router();

routerCost.get('/', [
        // authJwt.verifyToken,   
    ],
costInventoryHttp.costGet );

routerCost.post('/',
[
    // authJwt.verifyToken,
    // authJwt.isModerator,
    check('phase', 'etapa es necesaria').trim().notEmpty(),
    check('phase', 'id no valido').isMongoId(),
    check('list').custom(costInventoryValidate.costList),
    validate
], 
costInventoryHttp.createCost );

routerCost.put('/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    
], 
costInventoryHttp.updateCostById);

routerCost.put('/activar/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    authJwt.verifyToken,
    authJwt.isModerator
], 
costInventoryHttp.updateCostActivate);

routerCost.put('/desactivar/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    authJwt.verifyToken,
    authJwt.isModerator
], 
costInventoryHttp.updateCostDesactivate);

routerCost.delete(
    '/:id',
    [
        // check('id', 'id no valido').isMongoId(),
        // check('id').custom(costValidate.costId),
        // check('token', 'token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        // validate
        authJwt.verifyToken,
        authJwt.isModerator
    ],
    costInventoryHttp.deleteCostById);

export{
    routerCost
}
