import { Router } from 'express'
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';

import ensureAuthenticated from "./middlewares/ensureAuthenticated";

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', ensureAuthenticated, upload.array('images') , OrphanagesController.create);
routes.post('/users', UsersController.create);
routes.post('/sessions', UsersController.login);

export default routes;