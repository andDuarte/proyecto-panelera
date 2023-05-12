import { Router } from "express";

import { userHttp } from "../controllers/users.js";

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { userValidate } from '../helpers/users.js';

const routerUser = Router();

routerUser.get('/', [
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], userHttp.userGet );

// routerUser.get('/:id', [], userHttp );

routerUser.post('/', [
    check('name', 'nombre es necesario').trim().notEmpty(),
    check('email', 'email es necesario').trim().notEmpty(),
    check('email').custom(userValidate.userEmail),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('password', 'la contraseña es necesaria').trim().notEmpty(),
    validate
], userHttp.userPost );

routerUser.put('/:id', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', ' id no valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate
], userHttp.userPut );

routerUser.put('/activar/:id', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'id no es valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate
], userHttp.userActivate );

routerUser.put('/desactivar/:id', [
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    check('id', 'id no es valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate
], userHttp.userDeactivate );

routerUser.post('/login', [
    check('email', 'email es necesario').trim().notEmpty(),
    check('email').custom(userValidate.userState),
    check('password', 'contraseña es necesaria').trim().notEmpty(),
    validate
], userHttp.userLogin );

export{
    routerUser
}