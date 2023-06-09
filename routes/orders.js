import { Router } from 'express';
import { ordersHttp } from '../controllers/order.js';
import { authJwt, validateId } from "../middlewares/index.js";
// import * as authJwt from '../middlewares/validate-jwt.js';
// import * as validateId from "../middlewares/validateId.js";
import { check, body, header, param, query } from 'express-validator';
import { orderValidate } from '../helpers/order.js';
import { validate } from '../middlewares/validate-fields.js'

const routerOrder = Router();

routerOrder.get('/',
    [
        authJwt.verifyToken,
    ],
    ordersHttp.getOrders);

routerOrder.post('/',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        body('customer').trim().notEmpty(),
        body('customer').isMongoId(),
        validate
    ],
    ordersHttp.createOrder);

routerOrder.put(
    '/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        // validateId.checkId,
    ],
    ordersHttp.updateOrderById);

routerOrder.put(
    '/activar/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
        // authJwt.isModerator
    ],
    ordersHttp.updateOrderActivate);

routerOrder.put(
    '/desactivar/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
        // authJwt.isModerator
    ],
    ordersHttp.updateOrderDesactivate);

routerOrder.delete(
    '/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
    ],
    ordersHttp.deleteOrderById);

export {
    routerOrder
}