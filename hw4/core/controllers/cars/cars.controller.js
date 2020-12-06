const {carsService} = require('../../services');

module.exports ={
    getAllCars: async (req, res) => {
        const car = await carsService.getAllCars(req.query);

        res.json(car);
    },
    createCar: async (req, res) => {
        const car = req.body;
        const createdCar = await carsService.createCar(car);

        res.json(createdCar)
    },
    getOneCar: async (req,res) => {
        const {name} = req.params;

        const car = await carsService.getOneCar(name);

        res.json(car);
    },
    deleteCar: (req, res) => {
        const {id} = req.params;
        const remove = carsService.deleteCar(id);

        res.status(204).json(remove);
    }
}
