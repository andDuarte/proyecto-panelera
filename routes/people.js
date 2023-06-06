import { Router } from 'express';

import { peopleHttp } from '../controllers/people.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { peopleValidate } from '../helpers/people.js';

const routerPeople = Router();

routerPeople.get('/', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], peopleHttp.peopleGet );
    
routerPeople.post('/', [
    check('name','nombre es necesario').trim().notEmpty(),
    check('numberIdentification','numero identificacion es necesario').trim().notEmpty(),
    check('typeDocument','tipo identificacion es necesario').trim().notEmpty(),
    check('numberIdentification').custom(peopleValidate.peopleIdentification),
    check('numberPhone','numero telefono es necesario').trim().notEmpty(),
    check('birthDate','fecha nacimiento es necesaria').trim().notEmpty(),
    check('medicalInsuranceCompany','compañia seguro medico es necesaria').trim().notEmpty(),
    check('residenceAddress','direccion residencia es necesaria').trim().notEmpty(),
    check('typePeople').trim().notEmpty(),
    // check('token','token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], peopleHttp.peoplePost );

routerPeople.put('/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], peopleHttp.peoplePut );

routerPeople.put('/activar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], peopleHttp.peopleActivate );

routerPeople.put('/desactivar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(peopleValidate.peopleId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], peopleHttp.peopleDesactivate );

export{
    routerPeople
}