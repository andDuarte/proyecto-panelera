import { Router } from "express";

import { userHttp } from "../controllers/users.js";

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { userValidate } from '../helpers/users.js';

const routerUser = Router();

routerUser.get('/', [], userHttp.userGet );

// routerUser.get('/:id', [], userHttp )

routerUser.post('/', [
    check('name', 'body nombre es necesario').trim().notEmpty(),
    check('identification', 'body identificacion es necesario').trim().notEmpty(),
    check('email', 'body email es necesario').trim().notEmpty(),
    check('email').custom(userValidate.userEmail),
    check('password', 'body password es necesaria').trim().notEmpty(),
    check('eps', 'body eps es necesario').trim().notEmpty(),
    validate
], userHttp.userPost );

routerUser.put('/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'body id no valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate
], userHttp.userPut );

routerUser.put('/activar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'body id no es valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate
], userHttp.userActivate );

routerUser.put('/desactivar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'body id no es valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate
], userHttp.userDeactivate );

routerUser.post('/login', [
    check('email', 'body email es necesario').trim().notEmpty(),
    check('password', 'body password es necesaria').trim().notEmpty(),
    validate
], userHttp.userLogin );

export{
    routerUser
}