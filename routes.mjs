import { add, getAll, getByName, updateFile } from './products.mjs';
import express from 'express';

const router = express.Router();

router.get('/products/:name', (req, res) => {
    const name = req.params.name;

    let response = null;
    let code = 200;
    const pdt = getByName(name);
    response = pdt ? pdt : { "message": "Cannot find product with name " + name };

    res.status(code).send(response);
});

router.get('/products', (req, res) => {

    let response = null;
    let code = 200;
    response = getAll();

    res.status(code).send(response);
});

router.post('/add', (req, res) => {
    console.log('pas compris');

    let response = null;
    let code = 200;
    const body = req.body;
    console.log(body);

    if (body.name && body.quantity){
        add(body.name, body.quantity);
        updateFile();
        response = "The product has been added successfully";
    }else {
        code = 400;
        response = "an error occured while adding the product";
    }

    res.status(200).send(response);
});

export default router;