import { Router } from 'express';

import { allotmentHttp } from '../controllers/allotment.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { allotmentValidate } from '../helpers/allotment.js';

const routerAllotment = Router();

routerAllotment.get('/', [], allotmentHttp.allotmentGet );

routerAllotment.post('/', [
    check('owner', 'body dueño del lote es necesario').trim().notEmpty(),
    check('size', 'body tamaño es necesario').trim().notEmpty(),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], allotmentHttp.allotmentPost );

routerAllotment.put('/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(allotmentValidate.allotmentId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], allotmentHttp.allotmentPut );

routerAllotment.put('/activar/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(allotmentValidate.allotmentId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], allotmentHttp.allotmentActivate );

routerAllotment.put('/desactivar/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(allotmentValidate.allotmentId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], allotmentHttp.allotmentDesactivate );

export{ routerAllotment }