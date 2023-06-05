import { Router } from 'express';

import { allotmentHttp } from '../controllers/allotment.js';

import { check, body, header, param, query } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { allotmentValidate } from '../helpers/allotment.js';

import { farmValidate } from '../helpers/farm.js';

import { peopleValidate } from '../helpers/people.js';

const routerAllotment = Router();

routerAllotment.get('/', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], allotmentHttp.allotmentGet );

routerAllotment.post('/', [
    body('name', 'nombre lote es necesario').trim().notEmpty(),
    body('size', 'tamaño lote es necesario').trim().notEmpty(),
    body('farm', 'granja es necesaria').trim().notEmpty(),
    body('farm').custom(farmValidate.farmId),
    // header('token', 'token es necesario').trim().notEmpty(),
    // header('token').custom(validateToken),
    validate
    // body('owner', 'dueño lote es necesario').trim().notEmpty(),
    // body('owner').custom(peopleValidate.peopleId),
], allotmentHttp.createAllotment );

routerAllotment.put('/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(allotmentValidate.allotmentId),
    header('token', 'token es necesario').trim().notEmpty(),
    header('token').custom(validateToken),
    validate
    // body('owner').custom(allotmentValidate.allotmentOwner),
], allotmentHttp.allotmentPut );

routerAllotment.put('/activar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(allotmentValidate.allotmentId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], allotmentHttp.allotmentActivate );

routerAllotment.put('/desactivar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(allotmentValidate.allotmentId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], allotmentHttp.allotmentDesactivate );

routerAllotment.delete('/:id', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // check('id', 'id no valido').isMongoId(),
    // check('id').custom(orderValidate.orderId),
    // validate
    // authJwt.verifyToken,
    // authJwt.isModerator
], allotmentHttp.deleteAllotmentById );

export{
    routerAllotment
}