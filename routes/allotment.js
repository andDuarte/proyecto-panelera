import { Router } from 'express';

import { allotmentHttp } from '../controllers/allotment.js';

const routerAllotment = Router();

routerAllotment.get('/', [], allotmentHttp.allotmentGet );

routerAllotment.post('/', [], allotmentHttp.allotmentPost );

routerAllotment.put('/:id', [], allotmentHttp.allotmentPut );

routerAllotment.put('/activar/:id', [], allotmentHttp.allotmentActivate );

routerAllotment.put('/desactivar/:id', [], allotmentHttp.allotmentDesactivate );

export{ routerAllotment }