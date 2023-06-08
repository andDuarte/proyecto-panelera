import { Router } from "express";
import { userHttp } from "../controllers/user.js";
import { authJwt, validateId, verifySingup } from "../middlewares/index.js";

const routerUser = Router();

routerUser.get('/', [
    authJwt.verifyToken,
], userHttp.userGet );

routerUser.put('/:id', [
    authJwt.verifyToken,
    authJwt.isAuthorised,
    validateId.checkId,
    verifySingup.checkChangeDuplicateEmail,
    verifySingup.checkDuplicateEmail,
    verifySingup.checkRolesExisted,
], userHttp.updateUserById );

routerUser.put('/activar/:id', [
    authJwt.verifyToken,
    authJwt.isAuthorised,
    validateId.checkId,
], userHttp.updateUserActivate );

routerUser.put('/desactivar/:id', [
    authJwt.verifyToken,
    authJwt.isAuthorised,
    validateId.checkId,
], userHttp.updateUserDesactivate );

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