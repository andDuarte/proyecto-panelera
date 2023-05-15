import { Router } from 'express';
import { authHttp } from '../controllers/auth.js';

const routerAuth = Router();


routerAuth.post('/singup', authHttp.singUp);
routerAuth.post('/singin', authHttp.singIn);

export { routerAuth }