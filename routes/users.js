import { Router } from "express";

import { userHttp } from "../controllers/users.js";

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

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

routerUser.put('/:id', [], userHttp.userPut );

routerUser.put('/activar/:id', [], userHttp.userActivate );

routerUser.put('/desactivar/:id', [], userHttp.userDeactivate );

routerUser.post('/login', [], userHttp.userLogin );

export{
    routerUser
}