
const parentService = require('../services/parent.service')


function addParentRoutes(app) {

       // SINGLE - GET Full details including reviews
       app.get('/parent/:id', (req, res) => {
        const parentId = req.params.id;                
        parentService.getParentById(parentId)
            .then(parent => res.json(parent))
    })
}

module.exports = addParentRoutes;