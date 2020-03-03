let cars = [
    {id: 1, make: 'Geo', model: 'Metro'},
    {id: 2, make: 'Tesla', model: 'Cybertruck'},
    {id: 3, make: 'Ferrari', model: 'Testarosa'},
]

module.exports = {
    getCars: (req, res) => {
        res.status(200).send(cars);
    },
    addCar: (req, res) => {
        cars.push(req.body);
        res.status(200).send(cars);
    },
    deleteCar: (req, res) => {
        let index = cars.findIndex(element => +req.params.id === element.id)
        cars.splice(index, 1);
        res.status(200).send(cars);
    },
    updateCar: (req, res) => {
        const {id} = req.params;
        let carObj = cars.find(element => +id === element.id);

        carObj.make = req.body.make;
        res.status(200).send(cars);
    }
};