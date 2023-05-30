import { Router } from 'express';
// import { check } from 'express-validator';
import { ordersHttp } from '../controllers/order.js';
import * as authJwt from '../middlewares/validate-jwt.js';
import * as validateId from "../middlewares/validateId.js";
import { check, body, header, param, query } from 'express-validator';
import { orderValidate } from '../helpers/order.js';

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
        check("customer").custom()
    ],
    ordersHttp.createOrder);

routerOrder.put(
    '/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
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