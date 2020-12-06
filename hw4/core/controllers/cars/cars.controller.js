const {carsService} = require('../../services');

module.exports ={
    getAllCars: async (req, res) => {
        const car = await carsService.getAllCars(req.query);

        res.json(car);
    },
    createCar: async (req, res) => {
        try {
            carsService.createCar(req.user);

            res.status(201).json('car created');
        } catch (e){
            res.json(e.message);
        }
    },
    getOneCar: async (req,res) => {
        const {name} = req.params;

        const car = await carsService.getOneCar(name);

        res.json(car);
    },
    deleteCar: (req, res) => {
        try{
            carsService.deleteCar(req.id);

            res.status(204).json('car removed');
        }catch (e){
            res.json(e.message);
        }
    }
}
