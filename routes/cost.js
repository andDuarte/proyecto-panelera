import { Router } from 'express';

import { costHttp } from '../controllers/cost.js';

import * as authJwt from '../middlewares/validate-jwt.js';

import * as verifySingup from "../middlewares/verifySignup.js";

import { check, body, param, header, query } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { costValidate } from '../helpers/cost.js';

const routerCost = Router();

routerCost.get('/', [
        authJwt.verifyToken,   
    ],
costHttp.costGet );

routerCost.post('/',
[
    authJwt.verifyToken,
    body('process', 'labor es necesaria').trim().notEmpty(),
    body('process', 'id no valido').isMongoId(),
    // body('typeOutlay', 'tipo gasto es necesario').trim().notEmpty(),
    // body('typeOutlay', "id no valido").isMongoId(),
    validate
], 
costHttp.createCost );

routerCost.put('/:id', 
[
    authJwt.verifyToken,
    param('id', 'id no valido').isMongoId(),
    param('id').custom(costValidate.costId),
    validate
], 
costHttp.updateCostById);

routerCost.put('/activar/:id', 
[
    authJwt.verifyToken,
    param('id', 'id no valido').isMongoId(),
    param('id').custom(costValidate.costId),
    validate
], 
costHttp.updateCostActivate);

routerCost.put('/desactivar/:id', 
[
    authJwt.verifyToken,
    param('id', 'id no valido').isMongoId(),
    param('id').custom(costValidate.costId),
    validate
], 
costHttp.updateCostDesactivate);

export{
    routerCost
}