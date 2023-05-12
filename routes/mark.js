import { Router } from 'express';

import { markHttp } from '../controllers/mark.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { markValidate } from '../helpers/mark.js';

const routerMark = Router();

routerMark.get('/', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], markHttp.markGet );

routerMark.post('/', [
    check('name', 'nombre es necesario').trim().notEmpty(),
    check('ownerCompany', 'empresa dueña es necesaria').trim().notEmpty(),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], markHttp.markPost );

routerMark.put('/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(markValidate.markId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], markHttp.markPut );

routerMark.put('/activar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(markValidate.markId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], markHttp.markActivate );

routerMark.put('/desactivar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(markValidate.markId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], markHttp.markDesactivate );

export{
    routerMark
}