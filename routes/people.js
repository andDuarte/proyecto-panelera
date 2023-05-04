import { Router } from 'express';

import { peopleHttp } from '../controllers/people.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { peopleValidate } from '../helpers/people.js';

const routerPeople = Router();

routerPeople.get('/', [], peopleHttp.peopleGet );

routerPeople.post('/', [
    check('name', 'body name es necesario').trim().notEmpty(),
    check('numberIdentification', 'body identification es necesario').trim().notEmpty(),
    check('numberIdentification').custom(peopleValidate.peopleIdentification),
    check('numberPhone', 'body number phone es necesario').trim().notEmpty(),
    check('birthDate', 'body birthDate es necesario').trim().notEmpty(),
    check('residenceAddress', 'body residenceAddress es necesario').trim().notEmpty(),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peoplePost );

routerPeople.put('/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peoplePut );

routerPeople.put('/activar/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peopleActivate );

routerPeople.put('/desactivar/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peopleDesactivate );

export{
    routerPeople
}