import { Router } from 'express';

import { typePayHttp } from '../controllers/typePay.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

const routerTypePay = Router();

routerTypePay.get('/', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], typePayHttp.typePayGet );

// routerTypePay.get('search',[
//     check('payCategory','categoria es necesaria').trim().notEmpty(),
//     check('token', 'token es necesario').trim().notEmpty(),
//     check('token').custom(validateToken),
//     validate
// ],typePayHttp.)