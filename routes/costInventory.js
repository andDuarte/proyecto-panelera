import {Router} from 'express';
import { costInventoryHttp } from '../controllers/inventory.js';
import { check } from 'express-validator';
import * as authJwt from '../middlewares/validate-jwt.js';
import * as verifySingup from "../middlewares/verifySignup.js";


// import { validate } from '../middlewares/validate-fields.js';
// import { validateToken } from '../middlewares/validate-jwt.js';
import { costInventoryValidate } from '../helpers/costInventory.js';

const routerCost = Router();

routerCost.get('/',
// [
//     check('token', 'token es necesario').trim().notEmpty(),
//     check('token').custom(validateToken),
//     validate 
// ]
[
    authJwt.verifyToken,   
],
 costInventoryHttp.getCost );

routerCost.post('/',
[
    // check('name','nombre es necesario').trim().notEmpty(),
    // check('code','codigo del cobro es necesario').trim().notEmpty(),
    // check('quantity','cantidad es necesario').trim().notEmpty(),
    // check('costs','costo es necesario').trim().notEmpty(),
    // check('date','fecha es necesaria').trim().notEmpty(),
    // check('detail','detalle es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    authJwt.verifyToken,
    authJwt.isModerator
], 
costInventoryHttp.createCost );

routerCost.put('/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    verifySingup.checkExistedId,
    
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
