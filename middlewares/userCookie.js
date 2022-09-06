const userCookie = (req, res, next) => {
    if(req.cookies.user !== undefined) {
        req.session.user = req.cookies.user
        res.locals.user = req.session.user;
    }
    next();
}

module.exports = userCookie