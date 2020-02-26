const teamRouter = require("./team/router")
const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter)

app.listen(port, () => console.log("listening on port " + port));