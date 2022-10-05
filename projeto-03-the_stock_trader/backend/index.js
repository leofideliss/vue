const app = require('express')()
const consign = require('consign')
const db = require('./db/db.js')

app.db = db

consign()
    .then('./middleware/middlewares.js')
    .then('./api')
    .then('./routes/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log("Ok")
})