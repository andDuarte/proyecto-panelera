import { Router } from 'express';

import { peopleHttp } from '../controllers/people.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { peopleValidate } from '../helpers/people.js';

const routerPeople = Router();

routerPeople.get('/', [
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], peopleHttp.peopleGet );

routerPeople.post('/', [
    check('name', 'el nombre es necesario').trim().notEmpty(),
    check('numberIdentification', 'el numero identificacion es necesario').trim().notEmpty(),
    check('numberIdentification').custom(peopleValidate.peopleIdentification),
    check('numberPhone', 'el numero telefono es necesario').trim().notEmpty(),
    check('birthDate', 'la fecha nacimiento es necesaria').trim().notEmpty(),
    check('residenceAddress', 'la direccion residencia es necesaria').trim().notEmpty(),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peoplePost );

routerPeople.put('/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peoplePut );

routerPeople.put('/activar/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peopleActivate );

routerPeople.put('/desactivar/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], peopleHttp.peopleDesactivate );

export{
    routerPeople
}