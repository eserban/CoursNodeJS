import {Add, Substract, Multiply} from './calc.mjs';
import { getAll } from '../server/products.mjs';
import fs from 'fs';

 describe("Description du bloc de test", () => {
           test("Add", () => expect(Add(5, 7)).toEqual(12));
           test("Substrsct", () => expect(Substract(7, 5)).toEqual(2));
           test("Multiply", () => expect(Multiply(7, 5)).toEqual(35));
});


// let products;
// describe("Description du bloc de test", () => {

//     beforeEach(() => {
//         products = JSON.parse(fs.readFileSync("../server/products.json"));
//     })


//     test("Testing getting all products", () => expect(getAll()).toMatchObject(products));

// });