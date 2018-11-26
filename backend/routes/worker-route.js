const babyService = require('../services/baby.Service')


function addWorkerRoutes(app){
    // LIST
    app.get('/baby', (req, res) => {
        babyService.query()
            .then(workers => res.json(workers))
            
    })

    // SINGLE - GET Full details including reviews
    app.get('/baby/:id', (req, res) => {
        const workerId = req.params.id;
        babyService.getById(workerId)
            .then(worker => res.json(worker))
    })

    // DELETE
    app.delete('/baby/:id', (req, res) => {
        const workerId = req.params.id;
        babyService.remove(workerId)
            .then(() => res.end(`worker ${workerId} Deleted `))
    })

    // CREATE
    app.post('/baby', (req, res) => {
        const car = req.body;
        babyService.add(car)
            .then(worker => {
                res.json(worker)
            })
    })

    // UPDATE
    app.put('/baby/:id', (req, res) => {
        const worker = req.body;
        babyService.update(worker)
            .then(worker => res.json(worker))
    })

}


module.exports = addBabyRoutes;