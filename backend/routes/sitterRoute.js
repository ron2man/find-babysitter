const sitterService = require('../services/sitter.service')


function addSitterRoutes(app) {
    // LIST
    app.get('/baby', (req, res) => {
        sitterService.query(req.query)
            .then(sitters => res.json(sitters))

    })

    app.get('/baby/check', (req, res) => {
        return sitterService.checkAvalability(req.query)
            .then(sitter => {
                res.json(sitter)
            })
    })


    // SINGLE - GET Full details including reviews
    app.get('/baby/:id', (req, res) => {
        const sitterId = req.params.id;
        sitterService.getById(sitterId)
            .then(sitter => res.json(sitter))
    })

    app.get('/baby/sitter/:username', (req, res) => {
        const username = req.params.username;
        return sitterService.getByUsernameSitter(username)
            .then(sitter => res.json(sitter))
    })

    app.get('/baby/parent/:username', (req, res) => {
        const username = req.params.username;
        return sitterService.getByUsernameParent(username)
            .then(sitter => res.json(sitter))
    })

    // DELETE
    app.delete('/baby/:id', (req, res) => {
        const sitterId = req.params.id;
        sitterService.remove(sitterId)
            .then(() => res.end(`sitter ${sitterId} Deleted `))
    })

    // CREATE
    app.post('/baby', (req, res) => {
        const user = req.body;
        sitterService.add(user)
            .then(sitter => {
                res.json(sitter)
            })
    })

    // UPDATE
    app.put('/baby/sitter/:id', (req, res) => {
        const user = req.body;
        return sitterService.updateSitter(user)
            .then(sitter => res.json(sitter))
    })

    app.put('/baby/parent/:id', (req, res) => {
        const user = req.body;
        return sitterService.updateParent(user)
            .then(sitter => res.json(sitter))
    })


}


module.exports = addSitterRoutes;