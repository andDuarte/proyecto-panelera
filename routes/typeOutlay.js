import { Router } from 'express';

import { typeOutlayHttp } from '../controllers/typeOutlay.js';

import { check, body, header, param, query } from 'express-validator';

import { validate } from '../middlewares/validate-fields.js';

import { validateToken } from '../middlewares/validate-jwt.js';

import { typeOutlayValidate } from '../helpers/typeOutlay.js';

const routerTypeOutlay = Router();

routerTypeOutlay.get('/', [

], typeOutlayHttp.typeOutlayGet );

routerTypeOutlay.post('/', [
    body('name', 'nombre es necesario').trim().notEmpty(),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
    validate
], typeOutlayHttp.createTypeOutlay );

routerTypeOutlay.put('/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(typeOutlayValidate.typeOutlayId),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),

], typeOutlayHttp.updateTypeOutlay );

routerTypeOutlay.put('/activar/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(typeOutlayValidate.typeOutlayId),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
], typeOutlayHttp.activateTypeOutlay );

routerTypeOutlay.put('/desactivar/:id', [
    param('id', 'id no valido').isMongoId(),
    param('id').custom(typeOutlayValidate.typeOutlayId),
    header('token', 'token es necesario').notEmpty(),
    header('token').custom(validateToken),
], typeOutlayHttp.desactivateTypeOutlay );

export{
    routerTypeOutlay
}