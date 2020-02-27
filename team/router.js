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

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next)
})

router.get("/team/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId)
    .then(team => {
      if (!team) {
        res.status(404).end()
      } else {
        res.json(team)
      }
    })
})

module.exports = router