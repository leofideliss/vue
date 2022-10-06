module.exports = app => {
    app.route('/acoes')
    .get(app.api.acoes.get)
    .post(app.api.acoes.save)
}