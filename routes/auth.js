import { Router } from 'express';
import { authHttp } from '../controllers/auth.js';
import { verifySingup } from "../middlewares/index.js";

const routerAuth = Router();

routerAuth.post(
    '/singup',
    [
        verifySingup.checkDuplicateEmail,
        verifySingup.checkRolesExisted
    ],
    authHttp.singUp);

routerAuth.post('/singin', authHttp.singIn);

export { routerAuth }