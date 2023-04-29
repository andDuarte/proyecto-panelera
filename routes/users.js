import { Router } from "express";

import { userHttp } from "../controllers/users.js";

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

const routerUser = Router();

routerUser.get('/', [], userHttp.userGet );

// routerUser.get('/:id', [], userHttp )

routerUser.post('/', [
    check('name', 'body nombre es necesario').trim().notEmpty(),
    check('identification', 'body identificacion es necesario').trim().notEmpty(),
    check('email', 'body email es necesario').trim().notEmpty(),
    check('password', 'body password es necesaria').trim().notEmpty(),
    check('eps', 'body eps es necesario').trim().notEmpty(),
    validate
], userHttp.userPost );

routerUser.put('/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], userHttp.userPut );

routerUser.put('/activar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], userHttp.userActivate );

routerUser.put('/desactivar/:id', [
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], userHttp.userDeactivate );

routerUser.post('/login', [], userHttp.userLogin );

export{
    routerUser
}