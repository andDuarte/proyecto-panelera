import { Router } from "express";

import { usersHttp } from "../controllers/users.js";


const routerUsers= Router()

routerUsers.get('/',[] ,usersHttp.usersGet )

routerUsers.get('/:id',[], usersHttp.usersGetQuery)

routerUsers.post('/',[],usersHttp.usersPost)

routerUsers.put('/:id',[], usersHttp.usersPut)

routerUsers.put('/state/:id',[], usersHttp.usersState )

export {routerUsers}