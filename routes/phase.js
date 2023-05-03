import { Router } from 'express';

import { phaseHttp } from '../controllers/phase.js';

import { check } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';
import { validateToken } from '../middlewares/validate-jwt.js';

import { phaseValidate } from '../helpers/phase.js';

const routerPhase = Router();

routerPhase.get('/', [], phaseHttp.phaseGet );

routerPhase.post('/', [
    check('name', 'body name es necesario').trim().notEmpty(),
    check('process', 'body process es necesario').trim().notEmpty(),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phasePost );

routerPhase.put('/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phasePut );

routerPhase.post('/actividad/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('process', 'body process es necesario').trim().notEmpty(),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseProcess );

routerPhase.put('/activar/:id', [
    check('id', 'params id es necesario').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseActivate );

routerPhase.put('/desactivar/:id', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('token', 'header token es necesario').trim().notEmpty(),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseDesactivate );

routerPhase.put('/:id/actividad/:idActivity', [
    check('id', 'params id no valido').isMongoId(),
    check('id').custom(phaseValidate.phaseId),
    check('idActivity', 'params idActivity no valido').isMongoId(),
    check('idActivity').custom(phaseValidate.phaseActivity),
    check('stateActivity', 'body stateActivity es necesario').trim().notEmpty(),
    check('token', 'header token es necesario'),
    check('token').custom(validateToken),
    validate
], phaseHttp.phaseActivity );

export{
    routerPhase
}