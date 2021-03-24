import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', upload.array('images'), orphanagesController.create);

export default routes;


// {
// 	"name": "Lar das meninas",
// 	"latitude": -27.2104339,
// 	"longitude": -49.629111,
// 	"about": "Sobre o orfanato",
// 	"instructions": "Venha visitar",
// 	"opening_hours": "Das 8h até 18h",
// 	"open_on_weekends": true
// }