const { Router } = require('express')
const router = new Router()
const { toJWT } = require('./jwt')
const User = require('../users/model')
const bcrypt = require('bcrypt')
const auth = require('./middleware')

router.post('/logins', (req, res, next) => {  
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: `Please supply a valid email and password`
    })
  } else {
    User
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: 'User with that email does not exist'
          })
        }
        if (bcrypt.compareSync(req.body.password, entity.password)) {
          res.send({
            jwt: toJWT({ userId: entity.id })
          })
        }
        else {
          res.status(400).send({
            message: 'Password was incorrect'
          })
        }
      })
      .catch(err => {
        console.error(err)
        res.status(500).send({
          message: 'Something went wrong'
        })
      })}
})

router.get('/games', auth, (req, res) => {
  res.send({
    message: `User ${req.user.email} is logged in.`,
  })
})

module.exports = router