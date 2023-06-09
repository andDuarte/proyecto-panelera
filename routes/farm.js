import { Router } from 'express';

import { farmHttp } from '../controllers/farm.js';

import { check, body, query, header, param} from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { farmValidate } from '../helpers/farm.js';

import { peopleValidate } from '../helpers/people.js';

const routerFarm = Router();

routerFarm.get('/', [
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    validate
], farmHttp.farmGet );

routerFarm.post('/', [
    body('name', 'nombre es necesario').trim().notEmpty(),
    body('ownerFarm', 'dueño granja es necesario').trim().notEmpty(),
    body('ownerFarm', 'id no valido').isMongoId(),
    body('ownerFarm').custom(farmValidate.farmOwner),
    body('ownerFarm').custom(peopleValidate.peopleId),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    validate
], farmHttp.farmPost );

routerFarm.put('/:id', [
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    param('id', 'id no valido').isMongoId(),
    param('id').custom(farmValidate.farmId),
    validate
], farmHttp.farmPut );

routerFarm.put('/activar/:id', [
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    param('id', 'id no valido').isMongoId(),
    param('id').custom(farmValidate.farmId),
    validate
], farmHttp.farmActivate );

routerFarm.put('/desactivar/:id', [
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    param('id', 'id no valido').isMongoId(),
    param('id').custom(farmValidate.farmId),
    validate
], farmHttp.farmDesactivate );

export{
    routerFarm
}