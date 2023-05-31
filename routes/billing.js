import { Router } from 'express';
// import { check } from 'express-validator';
import { billingsHttp } from '../controllers/billing.js';
import * as authJwt from '../middlewares/validate-jwt.js';
import * as validateId from "../middlewares/validateId.js";

const routerBilling = Router();

routerBilling.get('/',
    [
        authJwt.verifyToken,
    ],
    billingsHttp.getBillings);

routerBilling.post('/',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
    ],
    billingsHttp.createBilling);

routerBilling.put(
    '/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
    ],
    billingsHttp.updateBillingById);

routerBilling.put(
    '/activar/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
        // authJwt.isModerator
    ],
    billingsHttp.updateBillingActivate);

routerBilling.put(
    '/desactivar/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
        // authJwt.isModerator
    ],
    billingsHttp.updateBillingDesactivate);

routerBilling.delete(
    '/:id',
    [
        authJwt.verifyToken,
        authJwt.isAuthorised,
        validateId.checkId,
    ],
    billingsHttp.deleteBillingById);

export {
    routerBilling
}