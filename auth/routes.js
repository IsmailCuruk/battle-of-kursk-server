const { Router } = require('express')
const { toJWT, toData } = require('./jwt')
const auth = require('./middleware')

const router = new Router()

router.post('/logins', (req, res, next) => {
  const { email,password } = req.body
    if(!email && !password) {
    // 1. find user based on email address
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

        // 2. use bcrypt.compareSync to check the password against the stored hash
        if (bcrypt.compareSync(req.body.password, entity.password)) {

          // 3. if the password is correct, return a JWT with the userId of the user (user.id)
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
      })
    } 
  res.send({
    jwt: toJWT({ userId: 1})
  })
})

module.exports = router