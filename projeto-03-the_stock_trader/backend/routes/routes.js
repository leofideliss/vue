module.exports = app => {
    app.route('/acoes').get(app.api.acoes.save)
}