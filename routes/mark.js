import { Router } from 'express';

import { markHttp } from '../controllers/mark.js';

const routerMark = Router();

routerMark.get('/', [], markHttp.markGet );

routerMark.post('/', [], markHttp.markPost );

routerMark.put('/:id', [], markHttp.markPut );

routerMark.put('/activar/:id', [], markHttp.markActivate );

routerMark.put('/desactivar/:id', [], markHttp.markDesactivate );

export{
    routerMark
}