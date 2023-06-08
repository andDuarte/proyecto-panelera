import { Router } from 'express';

import { allotmentHttp } from '../controllers/allotment.js';

import { check, body, header, param, query } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { allotmentValidate } from '../helpers/allotment.js';

import { farmValidate } from '../helpers/farm.js';

const routerAllotment = Router();

routerAllotment.get('/', [
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    validate
], allotmentHttp.allotmentGet );

routerAllotment.post('/', [
    body('name', 'nombre lote es necesario').trim().notEmpty(),
    body('size', 'tamaño lote es necesario').trim().notEmpty(),
    body('farm', 'granja es necesaria').trim().notEmpty(),
    body('farm', 'id no valido').isMongoId(),
    body('farm').custom(farmValidate.farmId),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    validate
], allotmentHttp.createAllotment );

routerAllotment.put('/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(allotmentValidate.allotmentId),
    header('token', 'token es necesario').trim().notEmpty(),
    header('token').custom(validateToken),
    validate
], allotmentHttp.allotmentPut );

routerAllotment.put('/activar/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(allotmentValidate.allotmentId),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    validate
], allotmentHttp.allotmentActivate );

routerAllotment.put('/desactivar/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(allotmentValidate.allotmentId),
    header('token', 'token es necesario').trim().notEmpty(),
    header('token').custom(validateToken),
    validate
], allotmentHttp.allotmentDesactivate );

// routerAllotment.delete('/:id', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(orderValidate.orderId),
    // validate
    // authJwt.verifyToken,
    // authJwt.isModerator
// ], allotmentHttp.deleteAllotmentById );

export{
    routerAllotment
}