import { Router } from 'express';

import { costHttp } from '../controllers/cost.js';

import * as authJwt from '../middlewares/validate-jwt.js';

import * as verifySingup from "../middlewares/verifySignup.js";

// import { validateToken } from '../middlewares/validate-jwt.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { costValidate } from '../helpers/cost.js';

const routerCost = Router();

routerCost.get('/', [
        // authJwt.verifyToken,   
    ],
costHttp.costGet );

routerCost.post('/',
[
    // authJwt.verifyToken,
    // authJwt.isModerator,
    check('phase', 'etapa es necesaria').trim().notEmpty(),
    check('phase', 'id no valido').isMongoId(),
    check('list').custom(costValidate.costList),
    validate
], 
costHttp.createCost );

routerCost.put('/:id', 
[
    check('id', 'id no valido').isMongoId(),
    check('id').custom(costValidate.costId),
    check('list').custom(costValidate.costList),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], 
costHttp.updateCostById);

routerCost.put('/activar/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    // authJwt.verifyToken,
    // authJwt.isModerator
], 
costHttp.updateCostActivate);

routerCost.put('/desactivar/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    // authJwt.verifyToken,
    // authJwt.isModerator
], 
costHttp.updateCostDesactivate);

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
costHttp.deleteCostById);

export{
    routerCost
}