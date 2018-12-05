const babyService = require('../services/baby.Service')


function addUserRoutes(app) {

    app.post('/signup', (req, res) => {
        const userdetails = req.body        
        babyService.addSitter(userdetails)
            .then(user => {
                res.json(user)
            })
    })
    
    app.put('/login', (req, res) => {
        const typedDetails = req.body
        babyService.checkParentLogin(typedDetails)
            .then(user => {
                if (user.length) {                    
                    req.session.user = user[0]
                    res.json(user[0])
                }
            })

        babyService.checkSitterLogin(typedDetails)
            .then(user => {
                if (user.length) {
                    req.session.user = user[0]
                    res.json(user[0])
                }
            })
    })
}

module.exports = addUserRoutes