const express = require ('express'),
     cors = require('cors'),
     ctrl = require('./controllers/controller');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/cars', ctrl.getCars);
app.post('/api/car', ctrl.addCar);
app.delete('/api/car/:id', ctrl.deleteCar);
app.put('/api/car/:id', ctrl.updateCar);

const port = 3333;
app.listen(port, () => console.log(`Server running on ${port}`));