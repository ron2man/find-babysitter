const babyService = require('../services/baby.Service')


function addSitterRoutes(app){
    // LIST
    app.get('/baby?', (req, res) => {
        babyService.query(req.query)
            .then(sitters => res.json(sitters))
            
    })

    app.get('/baby/check?', (req, res) => {
        return babyService.checkAvalability(req.query)
            .then(sitter => {
                    res.json(sitter)
                })  
    })


    // SINGLE - GET Full details including reviews
    app.get('/baby/:id', (req, res) => {
        const sitterId = req.params.id;
        babyService.getById(sitterId)
            .then(sitter => res.json(sitter))
    })

    app.get('/baby/sitter/:username', (req, res) => {
        const username = req.params.username;
        return babyService.getByUsernameSitter(username)
            .then(sitter => res.json(sitter))
    })

    app.get('/baby/parent/:username', (req, res) => {
        const username = req.params.username;
        return babyService.getByUsernameParent(username)
            .then(sitter => res.json(sitter))
    })



    // DELETE
    app.delete('/baby/:id', (req, res) => {
        const sitterId = req.params.id;
        babyService.remove(sitterId)
            .then(() => res.end(`sitter ${sitterId} Deleted `))
    })

    // CREATE
    app.post('/baby', (req, res) => {
        const user = req.body;
        babyService.add(user)
            .then(sitter => {
                res.json(sitter)
            })
    })

    // UPDATE
    app.put('/baby/sitter/:id', (req, res) => {
        const user = req.body;
        return babyService.updateSitter(user)
            .then(sitter => res.json(sitter))
    })

    app.put('/baby/parent/:id', (req, res) => {
        const user = req.body;
        return babyService.updateParent(user)
            .then(sitter => res.json(sitter))
    })


}


module.exports = addSitterRoutes;