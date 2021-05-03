const express = require('express')
const router = express.Router()
const user = require('../database')

/* GET user object. */
router.get('/', (req, res) => {
  res.json({ success: true, user, user })
})

// password update route that will update password
router.post('/update-password', (req, res) => {
  const { password } = req.body
  try {
    if (password) {
      user.password = password
      if (user.password === password) { // this check is just to check either password has been updated or not
        res.json({ success: true, user: user, message: "User password has been update successfully" })
      } else {
        res.json({ success: false, user: user, message: "Sorry, your request cannot be processed at the moment" })
      }
    } else {
      res.json({ success: false, message: "Missing required parameters" })
    }
  } catch (err) {

  }
})

module.exports = router
