import { Router } from 'express';

import { phaseHttp } from '../controllers/phase.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { phaseValidate } from '../helpers/phase.js';

const routerPhase = Router();

routerPhase.get('/', [
    // check('token', 'el token es necesario').trim().notEmpty(),
    // check('token').custom(validateToken),
    // validate
], phaseHttp.phaseGet );

routerPhase.post('/', [
    check('name', 'el nombre es necesario').trim().notEmpty(),
    check('process', 'el proceso es necesario').trim().notEmpty(),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phasePost );

routerPhase.put('/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phasePut );

routerPhase.post('/actividad/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('process', 'el proceso es necesario').trim().notEmpty(),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseProcess );

routerPhase.put('/activar/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseActivate );

routerPhase.put('/desactivar/:id', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'el token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseDesactivate );

routerPhase.put('/:id/actividad/:idActivity', [
    check('id', 'el id no es valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('idActivity', 'el id actividad no es valido').isMongoId(),
    check('idActivity').custom(phaseValidate.phaseActivity),
    check('stateActivity', 'el estado actividad es necesario').trim().notEmpty(),
    check('token', 'el token es necesario'),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseActivity );

export{
    routerPhase
}