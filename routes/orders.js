import { Router } from 'express';

import { ordersHttp } from '../controllers/orders.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { orderValidate } from '../helpers/orders.js';

const routerOrders = Router();

routerOrders.get('/', [], ordersHttp.ordersGet );

routerOrders.post('/', [
    check('customerName', 'el nombre es necesario').trim().notEmpty(),
    check('documentType', 'el tipo de documento es necesario').trim().notEmpty(),
    check('documentNumber', 'el número de documento es necesario').notEmpty(),
    check('phoneNumber', 'el número de telefono necesario').trim().notEmpty(),
    check('email', 'el email es necesario').trim().notEmpty(),
    check('descriptionOfPanela', 'la descricipción de la panela es necesaria').trim().notEmpty(),
    check('preferencesOfPanela', 'las preferencias son necesarias').trim().notEmpty(),
    check('orderStatus', 'elestado es necesario').trim().notEmpty(),
    check('quantityOfPanela', 'la cantidad en necesaria').notEmpty(),
    check('address', 'la direciion es necesaria').trim().notEmpty(),
    validate
], ordersHttp.ordersPost );

routerOrders.put(
    '/:id', 
    [
        // check('token', 'el token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        check('id', 'el id no es valido').isMongoId(),
        check('id').custom(orderValidate.orderId),
        validate
    ],
    ordersHttp.ordersPut );

routerOrders.put(
    '/activar/:id', 
    [
        // check('token', 'el token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        check('id', 'el id no es valido').isMongoId(),
        check('id').custom(orderValidate.orderId),
        validate
    ], 
    ordersHttp.ordersActivate );

routerOrders.put(
    '/desactivar/:id', [
        // check('token', 'el token es necesario').trim().notEmpty(),
        // check('token').custom(validateToken),
        check('id', 'el id no es valido').isMongoId(),
        check('id').custom(orderValidate.orderId),
        validate
    ],
    ordersHttp.ordersDesactivate );

export{
    routerOrders
}