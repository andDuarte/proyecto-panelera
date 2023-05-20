import { Router } from 'express';
import { ordersHttp } from '../controllers/order.js';
import { check } from 'express-validator';
import * as authJwt from '../middlewares/validate-jwt.js';
import * as verifySingup from "../middlewares/verifySignup.js";


// import { validate } from '../middlewares/validate-fields.js';
// import { validateToken } from '../middlewares/validate-jwt.js';
import { orderValidate } from '../helpers/order.js';

const routerOrder = Router();

routerOrder.get('/',
    // [
        // check('token', 'token no valido').trim().notEmpty(),
        // check('token').custom(validateToken),
        // validate
    // ],
    [
        authJwt.verifyToken,
    ],
    ordersHttp.getOrders);

routerOrder.post('/',
    [
        // check('token', 'token no valido').trim().notEmpty(),
        // check('token').custom(validateToken),
        // check('customerName', 'nombre es necesario').trim().notEmpty(),
        // check('documentType', 'tipo de documento es necesario').trim().notEmpty(),
        // check('documentNumber', 'número de documento es necesario').notEmpty(),
        // check('phoneNumber', 'número de telefono necesario').trim().notEmpty(),
        // check('email', 'email es necesario').trim().notEmpty(),
        // check('descriptionOfPanela', 'descricipción de la panela es necesaria').trim().notEmpty(),
        // check('preferencesOfPanela', 'preferencias panela son necesarias').trim().notEmpty(),
        // check('orderStatus', 'estado pedido es necesario').trim().notEmpty(),
        // check('quantityOfPanela', 'cantidad panela en necesaria').notEmpty(),
        // check('sendAddress', 'direccion envio es necesaria').trim().notEmpty(),
        // validate
        authJwt.verifyToken,
        authJwt.isModerator
    ],
    ordersHttp.createOrder);

routerOrder.put(
    '/:id',
    [
        // check('token', 'token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        // check('id', 'id no valido').isMongoId(),
        // check('id').custom(orderValidate.orderId),
        // validate
        // verifySingup.checkExistedId,
        // authJwt.verifyToken,
        // authJwt.isModerator
    ],
    ordersHttp.updateOrderById);

routerOrder.put(
    '/activar/:id',
    [
        // check('token', 'token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        // check('id', 'id no valido').isMongoId(),
        // check('id').custom(orderValidate.orderId),
        // validate
        authJwt.verifyToken,
        authJwt.isModerator
    ],
    ordersHttp.updateOrderActivate);

routerOrder.put(
    '/desactivar/:id',
    [
        // check('token', 'token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        // check('id', 'id no valido').isMongoId(),
        // check('id').custom(orderValidate.orderId),
        // validate
        authJwt.verifyToken,
        authJwt.isModerator
    ],
    ordersHttp.updateOrderDesactivate);

routerOrder.delete(
    '/:id',
    [
        // check('token', 'token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        // check('id', 'id no valido').isMongoId(),
        // check('id').custom(orderValidate.orderId),
        // validate
        authJwt.verifyToken,
        authJwt.isModerator
    ],
    ordersHttp.deleteOrderById);

export {
    routerOrder
}