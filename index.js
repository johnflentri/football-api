const teamRouter = require("./team/router")
const playerRouter = require("./player/router")
const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)

app.listen(port, () => console.log("listening on port " + port));