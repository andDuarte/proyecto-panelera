import { Router } from "express";
import { userHttp } from "../controllers/user.js";
import { check } from 'express-validator';
import { validate } from '../middlewares/validate-fields.js';
import { userValidate } from '../helpers/user.js';
import * as authJwt from '../middlewares/validate-jwt.js';

const routerUser = Router();

routerUser.get('/', [
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate,
    // authJwt.verifyToken,

], userHttp.userGet );

// routerUser.get('/:id', [], userHttp );

// routerUser.post('/', [
//     check('name', 'nombre es necesario').trim().notEmpty(),
//     check('email', 'email es necesario').trim().notEmpty(),
//     check('email').custom(userValidate.userEmail),
//     // check('token', 'token es necesario').trim().notEmpty(),
//     // check('token').custom(validateToken),
//     check('password', 'la contraseña es necesaria').trim().notEmpty(),
//     validate,
//     authJwt.verifyToken,

// ], userHttp.userPost );

routerUser.put('/:id', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // check('id', ' id no valido').isMongoId(),
    // check('id').custom(userValidate.userId),
    // validate,
    authJwt.verifyToken,
], userHttp.userPut );

routerUser.put('/activar/:id', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    check('id', 'id no es valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate,
    authJwt.verifyToken,

], userHttp.userActivate );

routerUser.put('/desactivar/:id', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    check('id', 'id no es valido').isMongoId(),
    check('id').custom(userValidate.userId),
    validate,
    authJwt.verifyToken,
], userHttp.userDeactivate );

// routerUser.post('/login', [
//     check('email', 'email es necesario').trim().notEmpty(),
//     check('email').custom(userValidate.userState),
//     check('password', 'contraseña es necesaria').trim().notEmpty(),
//     validate
// ], userHttp.userLogin );
// routerUser.delete(
//     '/:id',
//     [
//         // check('token', 'token es necesario').trim().notEmpty(),
//         // check('token').custom(validateToken),
//         // check('id', 'id no valido').isMongoId(),
//         // check('id').custom(orderValidate.orderId),
//         // validate
//         // authJwt.verifyToken,
//         // authJwt.isModerator
//     ],
//     userHttp.deleteUserById);

export{
    routerUser
}