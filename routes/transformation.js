import { Router } from 'express';

import { transformationHttp } from '../controllers/transformation.js'

const routerTransformation = Router();

routerTransformation.get('/', [], transformationHttp.transformationGet );

routerTransformation.post('/', [], transformationHttp.transformationPost );

routerTransformation.put('/:id', [], transformationHttp.transformationPut );

routerTransformation.put('/activar/:id', [], transformationHttp.transformationActivate );

routerTransformation.put('/desactivar/:id', [], transformationHttp.transformationDesactivate );

export{
    routerTransformation
}