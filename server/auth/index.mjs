import fs from 'fs'
import jwt from 'jsonwebtoken'

/**
 * GENERATION DU TOKEN
 * @param {object} data
 * @returns
 */
const generateAccessToken = (data) => {
  if (!data) return null

  delete data.password
  return jwt.sign(data, process.env.TOKEN, { expiresIn: '1800s' })
}

/**
 * AUTHENTIFICATION
 * @param {String} name
 * @param {String} password
 * @returns
 */
const auth = (name, password) => {
  const userString = fs.readFileSync('./auth/users.json', 'utf-8')
  const users = JSON.parse(userString)

  const user = users.find((e) => e.name === name && e.password === password)

  return generateAccessToken(user)
}

export { auth }
