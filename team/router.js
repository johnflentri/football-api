const { Router } = require("express")
const Team = require("./model")

const router = new Router()

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(team => {
      res.json(team)
    })
    .catch(next)
})

module.exports = router