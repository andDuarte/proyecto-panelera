import { Router } from "express";

import { userHttp } from "../controllers/users.js";


const routerUser = Router();

routerUser.get('/', [], userHttp.userGet );

// routerUser.get('/:id', [], userHttp )

routerUser.post('/', [], userHttp.userPost );

routerUser.put('/:id', [], userHttp.userPut );

routerUser.put('/activar/:id', [], userHttp.userActivate );

routerUser.put('/desactivar/:id', [], userHttp.userDeactivate );

export{
    routerUser
}