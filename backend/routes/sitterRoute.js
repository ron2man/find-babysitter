const babyService = require('../services/baby.Service')


function addSitterRoutes(app){
    // LIST
    app.get('/baby?', (req, res) => {
        babyService.query(req.query)
            .then(sitters => res.json(sitters))
            
    })

    // SINGLE - GET Full details including reviews
    app.get('/baby/:id', (req, res) => {
        const sitterId = req.params.id;
        babyService.getById(sitterId)
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
        const sitter = req.body;
        babyService.add(car)
            .then(sitter => {
                res.json(sitter)
            })
    })

    // UPDATE
    app.put('/baby/:id', (req, res) => {
        const sitter = req.body;
        babyService.update(sitter)
            .then(sitter => res.json(sitter))
    })

}


module.exports = addSitterRoutes;