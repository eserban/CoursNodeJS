import fs from 'fs';

let products = JSON.parse(fs.readFileSync("./products.json", "utf8"));

const updateFile = () => {
    fs.writeFileSync('./products.json', JSON.stringify(products));
}

/**
 * AJOUT SYNCHRONE
 * @param {string} p : product
 * @returns promise
 */
const add = (name, quantity) => {
  const pdt = products.find((e) => e.name === name);

  if (pdt) {
    if (quantity) {
      pdt.quantity += quantity;
    } else {
      console.log(`Manque la quantity pour ${name}`);
      return;
    }
  } else {
    products.push({ name, quantity });
  }
};

/**
 * RETOURNE LA LISTE DES PRODUITS
 * @returns [object]
 */
const getAll = () => {
  return products;
};

/**
 * RETOURNE UN PRODUIT PAR SON NOM
 * @param {*} id
 * @returns object : product
 */
const getByName = (name) => {
  return products.find((p) => p.name === name);
};

/**
 * MET A JOUR UN PRODUIT PAR SON NOM
 * @param {string} name
 * @param {object} p : product
 * @returns bool
 */
const update = (name, p) => {
  const i = products.findIndex((e) => e.name === name);

  if (i > -1) {
    products[i] = p;
    return true;
  }

  return false;
};

/**
 * SUPPRIME LE PRODUIT SI AUCUNE QUANTITY PASSEE SINON SUPPRIME LE NOMBRE DE QUANTITY
 * @param {*} name
 * @param {*} quantity
 * @returns
 */
const remove = (name, quantity) => {
  const pdt = products.find((e) => e.name === name);

  if (pdt) {
    if (quantity) {
      // pas assez de stock
      if (quantity > pdt.quantity) {
        console.log(`Stock insufisant pour ${name} : ${pdt.quantity} max`);
        return false;
      }

      // soustrait le stock
      pdt.quantity -= quantity;
      console.log(`${quantity} ${name} supprimé(e)(s), reste ${pdt.quantity}`);
      return true;
    }

    // supprime le produit
    products = products.filter((e) => e.name !== name);
    console.log(`${p.name} supprimé(e)s, 0 stock`);
    return true;
  }

  return false;
};

export { add, getAll, getByName, update, remove, updateFile };
