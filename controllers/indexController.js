const { validationResult } = require('express-validator')

module.exports = {
    index: (req, res) => {
        res.render('index', {
            session: req.session,
        })
    },
    login: (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()) {
            req.session.user = {...req.body}
            if(req.body.rememberColor !== undefined) {
                const TIME_IN_MILISECONDS= 60000
                res.cookie('user', req.session.user, {
                    maxAge: TIME_IN_MILISECONDS
                })
            }
            res.locals.user = req.session.user

            res.redirect('/')
        } else {
            res.render('index', {
                session: req.session,
                errors: errors.mapped()
            })
        }
    },
    saludo: (req, res) => {
        res.render('saludo', {
            session: req.session
        })
    },
    olvidar: (req, res) => {
        req.session.destroy()
        if(req.cookies.user){
            res.cookie('user', "", { maxAge: -1 })
        }
        res.redirect('/')
    }
}