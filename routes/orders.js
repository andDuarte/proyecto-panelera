import { Router } from 'express';

import { ordersHttp } from '../controllers/orders.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { orderValidate } from '../helpers/orders.js';

const routerOrders = Router();

routerOrders.get('/', [
    check('token', 'token no valido').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], ordersHttp.ordersGet );

routerOrders.post('/', [
    check('customerName', 'nombre es necesario').trim().notEmpty(),
    check('documentType', 'tipo de documento es necesario').trim().notEmpty(),
    check('documentNumber', 'número de documento es necesario').notEmpty(),
    check('phoneNumber', 'número de telefono necesario').trim().notEmpty(),
    check('email', 'email es necesario').trim().notEmpty(),
    check('descriptionOfPanela', 'descricipción de la panela es necesaria').trim().notEmpty(),
    check('preferencesOfPanela', 'preferencias panela son necesarias').trim().notEmpty(),
    check('orderStatus', 'estado pedido es necesario').trim().notEmpty(),
    check('quantityOfPanela', 'cantidad panela en necesaria').notEmpty(),
    check('sendAddress', 'direccion envio es necesaria').trim().notEmpty(),
    validate
], ordersHttp.ordersPost );

routerOrders.put(
    '/:id', 
    [
        check('token', 'token es necesario').trim().notEmpty(),
        check('token').custom(validateToken),
        check('id', 'id no valido').isMongoId(),
        check('id').custom(orderValidate.orderId),
        validate
    ],
    ordersHttp.ordersPut );

routerOrders.put(
    '/activar/:id', 
    [
        check('token', 'token es necesario').trim().notEmpty(),
        check('token').custom(validateToken),
        check('id', 'id no valido').isMongoId(),
        check('id').custom(orderValidate.orderId),
        validate
    ], 
    ordersHttp.ordersActivate );

routerOrders.put(
    '/desactivar/:id', [
        check('token', 'token es necesario').trim().notEmpty(),
        check('token').custom(validateToken),
        check('id', 'id no valido').isMongoId(),
        check('id').custom(orderValidate.orderId),
        validate
    ],
    ordersHttp.ordersDesactivate );

export{
    routerOrders
}