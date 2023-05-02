import { Router } from 'express';

import { phaseHttp } from '../controllers/phase.js';

const routerPhase = Router();

routerPhase.get('/', [], phaseHttp.phaseGet );

routerPhase.post('/', [], phaseHttp.phasePost );

routerPhase.put('/:id', [], phaseHttp.phasePut );

routerPhase.put('/activar/:id', [], phaseHttp.phaseActivate );

routerPhase.put('/desactivar/:id', [], phaseHttp.phaseDesactivate );

export{
    routerPhase
}