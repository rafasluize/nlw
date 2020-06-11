import express from 'express';
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsCrontroller = new ItemsController()

routes.get('/items', itemsCrontroller.index);
routes.post('/points', pointsController.create)
routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes;