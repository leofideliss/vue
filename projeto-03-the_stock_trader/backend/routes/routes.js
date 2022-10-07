module.exports = app => {
    app.route('/acoes')
    .get(app.api.acoes.get)
    .post(app.api.acoes.save)


    app.route('/comprar/acao')
    .get(app.api.acoes.getCompradas)
    .post(app.api.acoes.buy)
}