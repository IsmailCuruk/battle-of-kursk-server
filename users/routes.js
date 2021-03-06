const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('./model')
const colors = require('colors');

const router = new Router()

router.post('/users', (req, res, next) => {
  const user = {
    userName: req.body.user_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    country: req.body.country
  }
  console.log('Body sent by client: \n'.cyan, req.body)
  console.log('Body sent by server: \n'.cyan, res.body)
  User
    .create(user)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `Couldn't create the user`
        })
      }
      return res.status(201).send(user)
    })
    .catch(error => next(error))
})

router.get('/users', (req, res, next) => {
  User
    .findAll()
    .then(User => {
      res.send({ User })
    })
    .catch(error => next(error))
})

module.exports = router
