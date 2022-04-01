import {Add, Substract, Multiply} from './calc.mjs';

 describe("Description du bloc de test", () => {
           test("Add", () => expect(Add(5, 7)).toEqual(12));
           test("Substrsct", () => expect(Substract(7, 5)).toEqual(2));
           test("Multiply", () => expect(Multiply(7, 5)).toEqual(35));
});