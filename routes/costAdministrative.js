// no usar
import {Router} from 'express';
import { costAdministrativeHttp } from '../controllers/costAdministrative.js';
import { check } from 'express-validator';
import { validate } from '../middlewares/validate-fields.js';
import { validateToken } from '../middlewares/validate-jwt.js';

import { costAdministrativeValidate } from '../helpers/costAdministrative.js';

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
 costHttp.getCost );

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
costHttp.createCost );

routerCost.put('/:id', 
[
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(costValidate.costId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
    verifySingup.checkExistedId,
    
], 
costHttp.updateCostById);

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
costHttp.updateCostActivate);

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
