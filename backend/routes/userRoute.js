const sitterService = require('../services/sitter.service')


function addUserRoutes(app) {

    app.post('/signup', (req, res) => {
        const userdetails = req.body        
        sitterService.addSitter(userdetails)
            .then(user => {
                res.json(user)
            })
    })
    
    app.put('/login', (req, res) => {
        const typedDetails = req.body
        sitterService.checkParentLogin(typedDetails)
            .then(user => {
                if (user.length) {                    
                    req.session.user = user[0]
                    res.json(user[0])
                }
            })

        sitterService.checkSitterLogin(typedDetails)
            .then(user => {
                if (user.length) {
                    req.session.user = user[0]
                    res.json(user[0])
                }
            })
    })
}

module.exports = addUserRoutes