module.exports = app => {
    const save = (req, res) => {
        const acao = {...req.body}

        app.db('acoes')
        .insert(acao)
        .then(()=>res.status(204).send())
        .catch(err => res.status(500).send(err))
        
    }
    const get = (req, res) => {
        app.db('acoes')
            .select('id', 'qtd', 'nome', 'preco')
            .then(acoes => res.json(acoes))
            .catch(err => res.status(500).send(err))
    }

    const buy = (req, res) => {
        const acao = {...req.body}

        app.db('acoesAdiquiridas')
        .insert(acao)
        .then(()=>res.status(204).send())
        .catch(err => res.status(500).send(err))
        
    }

    const getCompradas = (req, res) => {
        app.db('acoesAdiquiridas')
            .select('id', 'qtd', 'nome', 'preco')
            .then(acoes => res.json(acoes))
            .catch(err => res.status(500).send(err))
    }

    return { save, get ,buy , getCompradas }
}