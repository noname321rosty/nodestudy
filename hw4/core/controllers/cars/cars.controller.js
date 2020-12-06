const {carsService} = require('../../services');

module.exports ={
    getAllCars: async (req, res) => {
        const car = await carsService.getAllCars(req.query);

        res.json(car);
    },
    createCar: async (req, res) => {
        req.car = car;
        const createdCar = await carsService.createCar(car);

        res.json(createdCar)
    },
    getOneCar: async (req,res) => {
        const {name} = req.params;

        const car = await carsService.getOneCar(name);

        res.json(car);
    },
    deleteCar: (req, res) => {
        req.id = { id };
        const remove = carsService.deleteCar(id);

        res.status(204).json(remove);
    }
}
