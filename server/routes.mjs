import { add, getAll, getByName, updateFile, remove } from './products.mjs'
import express from 'express'

const router = express.Router()

/**
 * Get product by name
 * @param {String} name
 */
router.get('/products/:name', (req, res) => {
  const name = req.params.name

  let response = null
  let code = 200
  const pdt = getByName(name)
  response = pdt ? pdt : { message: 'Cannot find product with name ' + name }

  res.status(code).send(response)
})

/**
 * Get all products
 */
router.get('/products', (req, res) => {
  let response = null
  let code = 200
  response = getAll()

  res.status(code).send(response)
})

/**
 * Add new product
 */
router.post('/add', (req, res) => {
  console.log('pas compris')

  let response = null
  let code = 200
  const body = req.body
  console.log(body)

  if (body.name && body.quantity) {
    add(body.name, body.quantity)
    updateFile()
    response = 'The product has been added successfully'
  } else {
    code = 400
    response = 'an error occured while adding the product'
  }

  res.status(code).send(response)
})

/**
 * Delete product quantity, if quantiy is not defined remove only 1 product
 */
router.delete('/products/:name', (req, res) => {
  const { name } = req.params
  const quantity = req.query.quantity ?? 1

  let response = null
  let code = 200

  let removed = remove(name, quantity)

  if (removed) {
    response = 'Product modified successfully'
  } else {
    response = 'An error occurred while removing the product'
    code = 400
  }

  res.status(code).send(response)
})

export default router
