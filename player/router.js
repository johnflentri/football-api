const { Router } = require("express")
const Player = require("./model")
const Team = require("../team/model")

const router = new Router()

router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(player => {
      res.json(player)
    })
    .catch(next)
})

router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next)
})

router.get("/player/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId, { include: [Team] })
    .then(player => {
      if (!player) {
        res.status(404).end()
      } else {
        res.json(player)
      }
    })
})

module.exports = router