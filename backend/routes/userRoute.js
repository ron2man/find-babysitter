// const babyService = require('../services/baby.Service')
const babyService = require('../services/baby.Service')


function addUserRoutes(app) {

    // todo sign up with mongo
    // app.post('/singup', (req, res) => {
    //     const nickname = req.body.nickname
    //     userService.addUser({ nickname })
    //         .then(user => res.json(user))
    // })


    app.put('/login', (req, res) => {
        const typedDetails = req.body
        console.log('the typedetails', typedDetails);

        babyService.checkLoginP(typedDetails)
            .then(user => {
                console.log('expect to full parent user obj if correct pwd and username:', user);
                if (user.length) {
                    console.log('expected parent user',user);
                    
                    req.session.user = user[0]
                    res.json(user[0])
                }
            })


        babyService.checkLogin(typedDetails)
            .then(user => {
                console.log('expect to full sitter user obj if correct pwd and username:', user);
                if (user.length) {
                    console.log('stter user', user[0]);
                    req.session.user = user[0]
                    res.json(user[0])
                }
            })

        // Promise.all([sitter, parent]).then(potenUsers => {            
        //     for (var i = 0; i < potenUsers.length; i++) {
        //         console.log('potenuser',potenUsers[i]);
        //         if (potenUsers[i]) return potenUsers[i]
        //     }
        // })
    })


    // amirs function
    // app.put('/login', (req, res) => {
    //   const nickname = req.body.nickname
    //   userService.checkLogin({ nickname })
    //     .then(user => {
    //       req.session.user = user
    //       res.json(user)
    //     })
    // })
}

module.exports = addUserRoutes