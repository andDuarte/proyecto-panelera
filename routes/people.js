import { Router } from 'express';

import { peopleHttp } from '../controllers/people.js';

const routerPeople = Router();

routerPeople.get('/', [], peopleHttp.peopleGet );

routerPeople.post('/', [], peopleHttp.peoplePost );

routerPeople.put('/:id', [], peopleHttp.peoplePut );

routerPeople.put('/activar/:id', [], peopleHttp.peopleActivate );

routerPeople.put('/desactivar/:id', [], peopleHttp.peopleDesactivate );

export{
    routerPeople
}