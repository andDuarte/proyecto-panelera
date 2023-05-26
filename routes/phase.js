import { Router } from 'express';

import { phaseHttp } from '../controllers/phase.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { phaseValidate } from '../helpers/phase.js';

import { allotmentValidate } from '../helpers/allotment.js';

const routerPhase = Router();

routerPhase.get('/', [
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], phaseHttp.phaseGet );

routerPhase.post('/', [
    check('name', 'nombre es necesario').trim().notEmpty(),
    check('process').custom(phaseValidate.phaseProcess),
    check('allotment').trim().notEmpty(),
    check('allotment').custom(allotmentValidate.allotmentId),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], phaseHttp.phasePost );

routerPhase.put('/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phasePut );

// agregar actividad
routerPhase.post('/actividad/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('process').custom(phaseValidate.phaseProcess),
    // check('token', 'token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    validate
], phaseHttp.phaseProcess );

routerPhase.put('/activar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseActivate );

routerPhase.put('/desactivar/:id', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseDesactivate );

// actualizar actividad
routerPhase.put('/:id/actividad/:idActivity', [
    check('id', 'id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('idActivity', 'id actividad no valido').isMongoId(),
    check('idActivity').custom(phaseValidate.phaseActivity),
    check('stateActivity', 'estado actividad es necesario').trim().notEmpty(),
    // check('token', 'token es necesario'),
    // check('token').custom(validateToken),
    validate
], phaseHttp.phaseActivity );

export{
    routerPhase
}