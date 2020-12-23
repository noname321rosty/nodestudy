const {carsService} = require('../../services');

module.exports ={
    getAllCars: async (req, res) => {
        const car = await carsService.getCars(req.query);

        res.json(car);
    },
    createCar: async (req, res) => {
        const car = req.body;

        const createdCar= await carsService.createCar(car);

        res.json(createdCar);
    },
    getOneCar: async (req,res) => {
        const {name} = req.params;

        const car = await carsService.getOneCar(name);

        res.json(car);
    },
    deleteCar: async (req, res) => {
        const {id} = req.params;

        const deletedCar =  await carsService.deleteCar(id);

        res.json(deletedCar);
    }
}
