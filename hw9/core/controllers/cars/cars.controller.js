const {carsService} = require('../../services');
const fs = require('fs-extra').promises
const { transaction } = require('../../db').getInstance();

module.exports ={
    getAllCars: async (req, res) => {
        const car = await carsService.getCars(req.query);

        res.json(car);
    },
    createCar: async (req, res) => {
        const transaction = await transaction();

        const car = req.body;

        const [cars] = req.photo;

        const createdCar =  await carsService.createCar(car , transaction);


        if(cars) {
            const photoDir = `cars/${createdCar.id}/photos`
            const fileExtension = cars.name.split('.').pop();
            const photoName = `${fileExtension}`

            await fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), {recursive: true})
            await cars.mv(path.resolve(process.cwd(), 'public', photoDir, photoName));

            await carsService.updateCar(createdCar.id, {photo: `${photoDir}/${photoName}`})
        }

        res.json(createdCar);
    },
    getOneCar: async (req,res) => {
        const {name} = req.params;

        const car = await carsService.getOneCar(name);

        res.json(car);
    },
    deleteCar: async (req, res) => {
        const transaction = await transaction();

        const {id} = req.params;

        const deletedCar =  await carsService.deleteCar(id , transaction);

        res.json(deletedCar);
    }
}
