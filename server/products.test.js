import { getAll } from '../server/products.mjs';

import products from '../server/products.json';

describe("Description du bloc de test", () => {

    test("Testing getting all products", () => expect(getAll()).toMatchObject(products));

});