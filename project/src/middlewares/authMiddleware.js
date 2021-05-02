function authMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redrect('/user/login');
    }
    next();
}

module.exports = authMiddleware;