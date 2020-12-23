const {Router} = require('express');

const { carsController } = require('../../controllers');
const { carsMiddlewares , fileMiddlewares } = require('../../middlewares');

const carsRouter = Router();

carsRouter.post('/',
    fileMiddlewares.checkPhotoCars,
    fileMiddlewares.checkFile,
    carsMiddlewares.checkCarsExistDB,
    carsController.createCar);

carsRouter.get('/', carsController.getAllCars);

carsRouter.get('/:name', carsController.getOneCar)

carsRouter.delete('/:id', carsMiddlewares.checkCarsExistDBRemove, carsController.deleteCar);


module.exports = carsRouter;


