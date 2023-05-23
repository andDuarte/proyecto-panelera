import { Router } from 'express';
import { authHttp } from '../controllers/auth.js';
import * as verifySingup from "../middlewares/verifySignup.js";

const routerAuth = Router();

routerAuth.post('/singup', [
    verifySingup.checkRolesExisted
],
authHttp.singUp);

routerAuth.post('/singin', authHttp.singIn);

export { routerAuth }